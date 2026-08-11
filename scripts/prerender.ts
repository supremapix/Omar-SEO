import fs from 'fs';
import path from 'path';
import { getAllRoutes } from '../src/config/routes';
import { getAllLocationSlugs, getLocationData } from '../src/data/locations';
import { COMMERCIAL_INTENTS_DATA } from '../src/data/commercialIntents';

const DOMAIN = 'https://omarseo.digital';

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[Prerender] Error: Template ${templatePath} does not exist. Run vite build first.`);
    return;
  }

  const baseHtmlTemplate = fs.readFileSync(templatePath, 'utf-8');
  const locationSlugs = getAllLocationSlugs();
  const routes = getAllRoutes(locationSlugs);

  console.log(`[Prerender] Pre-rendering ${routes.length} pages into static HTML files...`);

  let preRenderedCount = 0;

  for (const route of routes) {
    const rawPath = route.path;
    const cleanPath = rawPath === '/' ? '' : rawPath.replace(/^\//, '');
    const canonicalUrl = `${DOMAIN}${rawPath === '/' ? '' : rawPath}`;

    // Determine custom meta values & schemas per route
    let pageTitle = route.title;
    let pageDesc = route.description;
    let placeName = 'Curitiba';
    let lat = -25.4411;
    let lng = -49.2731;
    let schemas: Record<string, unknown>[] = [];

    if (cleanPath.startsWith('seo-')) {
      const locData = getLocationData(cleanPath);
      pageTitle = `SEO em ${locData.name} | Especialista em Google Maps e Busca - Omar SEO`;
      pageDesc = locData.shortDesc;
      placeName = locData.name;
      lat = locData.lat;
      lng = locData.lng;

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `SEO e Visibilidade Digital em ${locData.name}`,
        description: locData.shortDesc,
        provider: { '@type': 'ProfessionalService', name: 'Omar SEO', url: DOMAIN },
        areaServed: { '@type': 'AdministrativeArea', name: `${locData.name}, Curitiba - PR` },
      });
    } else if (COMMERCIAL_INTENTS_DATA[cleanPath]) {
      const commData = COMMERCIAL_INTENTS_DATA[cleanPath];
      pageTitle = commData.metaTitle;
      pageDesc = commData.metaDescription;

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: commData.h1,
        description: commData.subtitle,
        provider: { '@type': 'ProfessionalService', name: 'Omar SEO', url: DOMAIN },
      });
    }

    // Default LocalBusiness schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['ProfessionalService', 'LocalBusiness'],
      name: 'Omar SEO — Omar Skafi | Especialista em SEO, GEO e Visibilidade Digital',
      url: DOMAIN,
      telephone: '+5541987001004',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Sete de Setembro, 2775 - 9º andar',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '80230-010',
        addressCountry: 'BR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
    });

    const schemaTags = schemas
      .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n    ');

    const metaHead = `
    <title>${escapeXml(pageTitle)}</title>
    <meta name="description" content="${escapeXml(pageDesc)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="${escapeXml(placeName)}, Curitiba - PR" />
    <meta name="geo.position" content="${lat};${lng}" />
    <meta name="ICBM" content="${lat}, ${lng}" />
    <meta property="og:title" content="${escapeXml(pageTitle)}" />
    <meta property="og:description" content="${escapeXml(pageDesc)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Omar SEO" />
    ${schemaTags}
  `;

    // Inject head tags into template
    let pageHtml = baseHtmlTemplate;

    // Replace title & description if present or inject into head
    if (pageHtml.includes('<title>')) {
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${escapeXml(pageTitle)}</title>`);
    }
    if (pageHtml.includes('<meta name="description"')) {
      pageHtml = pageHtml.replace(/<meta name="description".*?\/>/s, `<meta name="description" content="${escapeXml(pageDesc)}" />`);
    }

    // Append remaining meta tags before </head>
    pageHtml = pageHtml.replace('</head>', `${metaHead}\n  </head>`);

    // Output target path
    let targetFilePath = templatePath;
    if (rawPath !== '/') {
      const targetSubDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(targetSubDir)) {
        fs.mkdirSync(targetSubDir, { recursive: true });
      }
      targetFilePath = path.join(targetSubDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
    preRenderedCount++;
  }

  // Ensure public files like robots.txt, sitemap.xml, llms.txt, _redirects are in dist
  const filesToCopy = ['robots.txt', 'llms.txt', 'llms-full.txt', '_redirects', 'manifest.webmanifest'];
  const publicDir = path.resolve(process.cwd(), 'public');

  for (const f of filesToCopy) {
    const src = path.join(publicDir, f);
    const dest = path.join(distDir, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  console.log(`[Prerender] Successfully pre-rendered ${preRenderedCount} static HTML pages in dist/!`);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

prerender().catch((err) => {
  console.error('[Prerender] Error during static pre-rendering:', err);
});
