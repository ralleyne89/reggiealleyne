// Deterministic web-icon exports of the exact approved artwork; no logo redraw.
// Requires sharp (or SHARP_MODULE pointing to an installed sharp module).
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/RA_logo_black.png');
const destination = path.join(root, 'public/icons');
await mkdir(destination, { recursive: true });

for (const size of [16, 32, 48, 180, 192, 512]) {
  const artworkSize = Math.floor(size * 0.86);
  const artwork = await sharp(source).resize(artworkSize, artworkSize, { fit: 'inside' }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } })
    .composite([{ input: artwork, gravity: 'centre' }])
    .png().toFile(path.join(destination, `ra-stars-${size}-20260915.png`));
}

// The full mark fits inside the central safe circle of a maskable icon.
const maskableArtwork = await sharp(source).resize(286, 286, { fit: 'inside' }).png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 3, background: '#ffffff' } })
  .composite([{ input: maskableArtwork, gravity: 'centre' }])
  .png().toFile(path.join(destination, 'ra-stars-maskable-512-20260915.png'));
