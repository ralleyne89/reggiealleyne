import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

// Run against the local Netlify static server to exercise its actual redirects.
const origin = process.env.AUDIT_ORIGIN || 'http://localhost:8888';
const files = await fs.readdir('dist', { recursive: true });
const routes = files.filter(file => file === 'index.html' || file.endsWith('/index.html'))
  .map(file => file === 'index.html' ? '/' : `/${file.slice(0, -11)}`)
  // The Tech Noir demo is a standalone static app, not an app route.
  .filter(route => !route.startsWith('/technoir-demo'));
const results = [];
const titles = new Set();
for (const route of routes) {
  const response = await fetch(`${origin}${route}`, { headers: { 'User-Agent': 'facebookexternalhit/1.1' } });
  const html = await response.text();
  assert.equal(response.status, 200, route);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(title, route);
  assert.equal(canonical, `https://reggiealleyne.com${route}`, route);
  assert.equal(/name="robots"[^>]*noindex/.test(html), false, route);
  assert.ok(html.includes('ra-stars-180-20260915.png'), route);
  // Project routes carry their own share image; every route must have one.
  assert.ok(/property="og:image" content="https:\/\/reggiealleyne\.com\/images\//.test(html), route);
  titles.add(title);
  results.push({ route, status: response.status, title, canonical });
}
assert.ok(routes.length >= 19, `expected at least 19 routes, found ${routes.length}`);
assert.equal(titles.size, routes.length, 'Every known route must have a unique title.');
for (const route of ['/audit-missing-page', '/project/audit-missing-project']) {
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  assert.equal(response.status, 404, route);
  assert.ok(html.includes('noindex, follow'), route);
  assert.ok(!html.includes('rel="canonical"'), route);
  results.push({ route, status: response.status, noindex: true });
}
for (const [from, to] of [['/works', '/work'], ['/project/1', '/project/cllctve-platform']]) {
  const response = await fetch(`${origin}${from}`, { redirect: 'manual' });
  assert.equal(response.status, 301, from);
  assert.ok(response.headers.get('location')?.endsWith(to), from);
  results.push({ route: from, status: response.status, destination: to });
}
const rootHtml = await fs.readFile('dist/index.html', 'utf8');
const manifest = JSON.parse(await fs.readFile('dist/manifest.webmanifest', 'utf8'));
const resources = new Set(['/robots.txt', '/sitemap.xml', ...manifest.icons.map(icon => icon.src)]);
for (const match of rootHtml.matchAll(/(?:href|content)="([^" ]+(?:\.png|\.jpg|\.webmanifest))"/g)) {
  resources.add(new URL(match[1], origin).pathname);
}
for (const resource of resources) {
  const response = await fetch(new URL(resource, origin));
  assert.equal(response.status, 200, resource);
  results.push({ resource, status: response.status, type: response.headers.get('content-type') });
}
const destination = path.resolve('docs/audits/2026-09-15/evidence/improved-route-checks.json');
await fs.writeFile(destination, JSON.stringify({ origin, checkedAt: new Date().toISOString(), results }, null, 2));
console.log(`PASS: ${routes.length} pages, 2 real 404s, 2 redirects, ${resources.size} metadata resources. ${destination}`);
