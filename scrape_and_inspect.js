const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchFollow(urlStr) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(urlStr);
    const mod = parsed.protocol === 'https:' ? https : http;
    const req = mod.get(urlStr, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      } 
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = new URL(res.headers.location, urlStr).toString();
        return resolve(fetchFollow(nextUrl));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ url: urlStr, status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
  });
}

async function scrape(name, url) {
  console.log(`Fetching ${name}: ${url}...`);
  const res = await fetchFollow(url);
  const outDir = path.join(__dirname, 'references_inspect', name);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), res.body, 'utf-8');
  console.log(`Saved ${name} HTML (${res.body.length} bytes) to ${outDir}`);

  // Extract CSS, JS links
  const cssMatches = [...res.body.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  const styleBlocks = [...res.body.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
  const scriptMatches = [...res.body.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  
  console.log(`${name} CSS files found:`, cssMatches);
  console.log(`${name} Style blocks found:`, styleBlocks.length);
  console.log(`${name} Script files count:`, scriptMatches.length);

  // Fetch CSS files
  for (let i = 0; i < cssMatches.length; i++) {
    const cssUrl = new URL(cssMatches[i], res.url).toString();
    try {
      const cssRes = await fetchFollow(cssUrl);
      fs.writeFileSync(path.join(outDir, `style_${i}.css`), cssRes.body, 'utf-8');
      console.log(`Saved CSS: ${cssUrl} (${cssRes.body.length} bytes)`);
    } catch (e) {
      console.error(`Failed to fetch CSS: ${cssUrl}`, e.message);
    }
  }

  // Extract meta tags, headings, structure
  const title = res.body.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
  const desc = res.body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] || '';
  console.log(`[${name}] Title: ${title}`);
  console.log(`[${name}] Desc: ${desc}`);
}

async function main() {
  await scrape('andreas_vision', 'https://andreas.vision/');
  await scrape('thenn_in', 'https://thenn.in/');
}

main().catch(console.error);
