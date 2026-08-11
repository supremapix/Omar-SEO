import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// High resolution master SVG for Omar SEO (512x512)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19"/>
      <stop offset="100%" stop-color="#030407"/>
    </linearGradient>

    <!-- Outer Glow Ring Gradient -->
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>

    <!-- Spark Gold Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>

    <!-- Subtle Drop Shadows -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Squircle Base for Apple / Android / Google Favicon standard -->
  <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bgGrad)" stroke="#1e293b" stroke-width="8"/>

  <!-- Glowing Accent Ring (Stylized 'O' + Search Lens) -->
  <circle cx="236" cy="256" r="130" fill="none" stroke="url(#ringGrad)" stroke-width="38" stroke-linecap="round" filter="url(#glow)"/>

  <!-- Search Handle / Growth Vector Beam -->
  <path d="M328 348 L410 430" fill="none" stroke="url(#ringGrad)" stroke-width="38" stroke-linecap="round"/>

  <!-- High Velocity SEO Growth Arrow (Up-Right Spark) -->
  <path d="M220 310 L310 220 M250 220 L310 220 L310 280" fill="none" stroke="url(#goldGrad)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Central AI Spark Node -->
  <circle cx="310" cy="220" r="16" fill="#facc15"/>
</svg>`;

async function generateFavicons() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write master SVG
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log('Created favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // Generate PNG sizes
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 }, // Google Search Favicon Official Standard
    { name: 'apple-touch-icon.png', size: 180 }, // Apple iOS
    { name: 'android-chrome-192x192.png', size: 192 }, // Android/PWA
    { name: 'android-chrome-512x512.png', size: 512 }, // Android/PWA
    { name: 'mstile-150x150.png', size: 150 }, // Microsoft Windows
  ];

  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(outputPath);
    console.log(`Generated ${name} (${size}x${size})`);
  }

  // Generate ICO file combining 16, 32, and 48
  // For favicon.ico, 48x48 PNG can be saved or converted to multi-icon ico format
  const icoPath = path.join(publicDir, 'favicon.ico');
  await sharp(svgBuffer)
    .resize(48, 48)
    .toFormat('png')
    .toFile(icoPath);
  console.log('Generated favicon.ico (48x48 compatible)');

  // Generate site.webmanifest and manifest.webmanifest according to RealFaviconGenerator
  const manifestContent = {
    name: "Omar SEO | Especialista em Visibilidade Google",
    short_name: "Omar SEO",
    description: "Consultoria e Engenharia de SEO, SEO Local, Google Maps e GEO em Curitiba.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#0a0a0f",
    background_color: "#0a0a0f",
    display: "standalone",
    start_url: "/"
  };

  const manifestStr = JSON.stringify(manifestContent, null, 2);
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestStr, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'manifest.webmanifest'), manifestStr, 'utf-8');
  console.log('Generated site.webmanifest and manifest.webmanifest');

  // Generate browserconfig.xml for Microsoft tiles
  const browserConfigXml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#0a0a0f</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfigXml, 'utf-8');
  console.log('Generated browserconfig.xml');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
