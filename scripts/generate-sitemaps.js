const fs = require('fs');
const path = require('path');
const zips = require('../data/zips.json');

// services list (hardcoded to avoid ESM import issues)
const svcSlugs = [
 'emergency-plumbing','drain-cleaning','water-heater-repair','water-heater-installation',
 'leak-detection','pipe-repair','toilet-repair','faucet-repair','sewer-line-repair',
 'garbage-disposal-repair','bathroom-plumbing','kitchen-plumbing','water-line-repair',
 'sump-pump-installation','fixture-installation','hydro-jetting','backflow-prevention',
 'commercial-plumbing','residential-plumbing','gas-line-repair'
];

const BASE = 'https://dirtyhandsplumbing.pages.dev';
const urls = [];
function add(p){ urls.push(BASE + p); }

add('/');
add('/about/');
add('/contact/');
add('/privacy/');
add('/terms/');
add('/services/');
for (const s of svcSlugs) add('/services/' + s + '/');
add('/areas/');
for (const z of zips) add('/areas/' + z.slug + '/');
add('/all-locations/');

function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

const CHUNK = 1000;
const publicDir = path.join(__dirname, '..', 'public');

// remove old sitemaps
for (const f of fs.readdirSync(publicDir)) {
  if (/^sitemap(-\d+)?\.xml$/.test(f)) fs.unlinkSync(path.join(publicDir, f));
}

const chunks = [];
for (let i = 0; i < urls.length; i += CHUNK) chunks.push(urls.slice(i, i + CHUNK));

chunks.forEach((chunk, idx) => {
  const n = idx + 1;
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    chunk.map(u => `  <url><loc>${esc(u)}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join('\n') +
    '\n</urlset>\n';
  fs.writeFileSync(path.join(publicDir, `sitemap-${n}.xml`), xml);
});

// index
const indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  chunks.map((_, idx) => `  <sitemap><loc>${BASE}/sitemap-${idx+1}.xml</loc></sitemap>`).join('\n') +
  '\n</sitemapindex>\n';
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);

console.log('Generated', chunks.length, 'sitemaps for', urls.length, 'URLs');
