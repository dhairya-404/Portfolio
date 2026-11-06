const fs = require('fs');
const path = require('path');

// 1. Analyze andreas.vision site.js
const siteJs = fs.readFileSync(path.join(__dirname, 'references_inspect', 'andreas_vision', 'site.js'), 'utf-8');

console.log('=== ANDREAS.VISION ANALYSIS ===');
// Search for key strings, components, routes, colors
const strings = siteJs.match(/"([^"\\]|\\.)*"/g) || [];
console.log('Total string literals in site.js:', strings.length);

// Look for navigation items
const navMatches = siteJs.match(/nav|Work|About|Writing|Experiments|Contact/gi);
console.log('Keyword occurrences:', navMatches ? navMatches.length : 0);

// Look for projects data
const projectIndices = [];
let idx = 0;
while ((idx = siteJs.indexOf('Product prototyping', idx + 1)) !== -1) {
  projectIndices.push(idx);
}
console.log('Product prototyping indices:', projectIndices);
if (projectIndices.length > 0) {
  console.log('Snippet around first project index:');
  console.log(siteJs.substring(projectIndices[0] - 200, projectIndices[0] + 500));
}

// 2. Analyze thenn.in HTML
const thennHtml = fs.readFileSync(path.join(__dirname, 'references_inspect', 'thenn_in', 'index.html'), 'utf-8');
console.log('\n=== THENN.IN ANALYSIS ===');
const hMatches = [...thennHtml.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
  tag: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
}));
console.log('Headings in thenn.in:', JSON.stringify(hMatches, null, 2));

// Look for key texts in thenn
const pMatches = [...thennHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 20);
console.log('\nSample paragraphs in thenn.in (first 10):', pMatches.slice(0, 10));

// Look for button labels, nav, links
const links = [...thennHtml.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
  href: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim()
})).filter(l => l.text.length > 0);
console.log('\nLinks in thenn.in:', links.slice(0, 15));
