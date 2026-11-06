const fs = require('fs');
const path = require('path');

const siteJs = fs.readFileSync(path.join(__dirname, 'references_inspect', 'andreas_vision', 'site.js'), 'utf-8');

// Find all dynamic imports
const importRegex = /import\(\s*["'](\.[^"']+\.js)["']\s*\)/g;
const chunks = [];
let match;
while ((match = importRegex.exec(siteJs)) !== null) {
  chunks.push(match[1]);
}
console.log('Dynamic chunks found in andreas site.js:', chunks);

// Find site-sky definition
const s5Idx = siteJs.indexOf('site-sky');
if (s5Idx !== -1) {
  console.log('\n--- SNIPPET AROUND SITE-SKY ---');
  console.log(siteJs.substring(s5Idx - 500, s5Idx + 800));
}
