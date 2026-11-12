import fs from 'node:fs/promises';
const { default: sharp } = await import(process.env.SHARP_MODULE || 'sharp');
const assets = [
  { source: 'public/images/figma/hero-white/portrait.png', stem: 'public/images/figma/hero-white/portrait', widths: [384, 768, 1024] },
  { source: 'public/images/figma/hero-white/reggie-alleyne-wordmark-chatgpt-flat.png', stem: 'public/images/figma/hero-white/wordmark', widths: [640, 1280, 2092] },
  { source: 'public/images/staybooked/staybooked-ai-optimizer-light-featured-card.png', stem: 'public/images/staybooked/featured', widths: [640, 1280] },
];
const report = [];
for (const asset of assets) {
  const original = await fs.stat(asset.source);
  for (const width of asset.widths) {
    const destination = `${asset.stem}-${width}.webp`;
    const info = await sharp(asset.source).resize({ width, withoutEnlargement: true }).webp({ quality: 85, alphaQuality: 100 }).toFile(destination);
    report.push({ source: asset.source, destination, originalBytes: original.size, bytes: info.size, width: info.width, height: info.height });
  }
}
await fs.writeFile('docs/audits/2026-09-15/evidence/image-optimization.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
