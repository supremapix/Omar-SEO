import fs from 'fs';
import path from 'path';
import { getAllRoutes } from '../src/config/routes';
import { getAllLocationSlugs } from '../src/data/locations';

const DOMAIN = 'https://www.omarseo.digital';

function generateSitemap() {
  const locationSlugs = getAllLocationSlugs();
  const routes = getAllRoutes(locationSlugs);

  const lastModDate = '2026-09-05';

  const xmlEntries = routes
    .map((r) => {
      const url = r.path === '/' ? `${DOMAIN}/` : `${DOMAIN}${r.path}`;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');
  console.log(`[Sitemap] Generated ${routes.length} URLs at ${sitemapPath}`);

  const distDir = path.resolve(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent, 'utf-8');
    console.log(`[Sitemap] Copied sitemap.xml to dist/`);
  }
}

generateSitemap();
