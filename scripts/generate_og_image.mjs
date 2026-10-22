import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0d12"/>
      <stop offset="50%" stop-color="#0f141c"/>
      <stop offset="100%" stop-color="#07090c"/>
    </linearGradient>

    <!-- Mesh Glows -->
    <radialGradient id="glowTopRight" cx="85%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBottomLeft" cx="15%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
    </radialGradient>

    <!-- Card Background -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18202c" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#121720" stop-opacity="0.85"/>
    </linearGradient>

    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#glowTopRight)"/>
  <rect width="${width}" height="${height}" fill="url(#glowBottomLeft)"/>

  <!-- Border accent line -->
  <line x1="0" y1="0" x2="${width}" y2="0" stroke="#3b82f6" stroke-width="3" stroke-opacity="0.6"/>

  <!-- Container Box -->
  <g transform="translate(100, 75)">
    <!-- Brand Header -->
    <g transform="translate(0, 0)">
      <!-- Logo icon box -->
      <rect width="64" height="64" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <g transform="translate(14, 14)">
        <path d="M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" fill="none" stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="14 2 14 8 20 8" fill="none" stroke="#60a5fa" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <rect width="8" height="5" x="2" y="13" rx="1" fill="none" stroke="#60a5fa" stroke-width="2.2"/>
        <path d="M8 13v-2a2 2 0 1 0-4 0v2" fill="none" stroke="#60a5fa" stroke-width="2.2"/>
      </g>

      <text x="82" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff" letter-spacing="0.5">TOTP GENERATOR</text>
      <text x="82" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="600" fill="#10b981" letter-spacing="1.5">RFC 6238 COMPLIANT &#8226; CLIENT-SIDE</text>
    </g>

    <!-- Main Headline -->
    <text x="0" y="150" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-1">
      Free Online TOTP Generator
    </text>

    <!-- Subtitle -->
    <text x="0" y="200" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="400" fill="#94a3b8" letter-spacing="-0.2">
      Instant Two-Factor Authentication codes with QR camera scanning &amp; secure vault.
    </text>

    <!-- Interactive Preview Card -->
    <g transform="translate(0, 245)" filter="url(#shadow)">
      <rect width="680" height="135" rx="18" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5"/>

      <!-- Timer Ring Preview -->
      <g transform="translate(35, 30)">
        <circle cx="38" cy="38" r="34" fill="none" stroke="#1e293b" stroke-width="6"/>
        <circle cx="38" cy="38" r="34" fill="none" stroke="#10b981" stroke-width="6" stroke-dasharray="213" stroke-dashoffset="40" stroke-linecap="round" transform="rotate(-90 38 38)"/>
        <text x="38" y="44" font-family="monospace" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">24s</text>
      </g>

      <!-- Code digits -->
      <g transform="translate(135, 42)">
        <text x="0" y="32" font-family="ui-monospace, monospace" font-size="44" font-weight="800" fill="#f8fafc" letter-spacing="6">849 201</text>
        <text x="0" y="56" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="500" fill="#64748b">Algorithm: SHA-1 &#8226; 6 Digits &#8226; Period: 30s</text>
      </g>

      <!-- Auto-copy badge -->
      <g transform="translate(485, 48)">
        <rect width="160" height="40" rx="20" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.4"/>
        <text x="80" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">ACTIVE &amp; VERIFIED</text>
      </g>
    </g>

    <!-- Feature Pills -->
    <g transform="translate(0, 420)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="200" height="42" rx="21" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
      <text x="100" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0" text-anchor="middle">&#8226; 100% Client-Side</text>

      <!-- Pill 2 -->
      <rect x="215" y="0" width="180" height="42" rx="21" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
      <text x="305" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0" text-anchor="middle">&#8226; QR Code Scanner</text>

      <!-- Pill 3 -->
      <rect x="410" y="0" width="190" height="42" rx="21" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
      <text x="505" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0" text-anchor="middle">&#8226; Local Storage Vault</text>

      <!-- Pill 4 -->
      <rect x="615" y="0" width="210" height="42" rx="21" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
      <text x="720" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0" text-anchor="middle">&#8226; SHA-1 / SHA-256 / 512</text>
    </g>

    <!-- Footer URL -->
    <text x="1000" y="490" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="700" fill="#64748b" text-anchor="end">
      realtotpgenerator.com
    </text>
  </g>
</svg>
`;

async function generate() {
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);
  console.log('og-image.png successfully created at:', outputPath);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
