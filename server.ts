import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const distDir = path.resolve(__dirname, 'dist');
const hasDist = fs.existsSync(distDir);

// Canonical Host Redirection (301)
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host === 'omarseo.digital') {
    return res.redirect(301, `https://www.omarseo.digital${req.url}`);
  }
  next();
});

// Explicit sitemap.xml with XML Content-Type header
app.get('/sitemap.xml', (req, res) => {
  const sitemapDist = path.resolve(distDir, 'sitemap.xml');
  const sitemapPublic = path.resolve(__dirname, 'public', 'sitemap.xml');
  const target = fs.existsSync(sitemapDist) ? sitemapDist : sitemapPublic;

  if (fs.existsSync(target)) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    return res.sendFile(target);
  }
  return res.status(404).send('Sitemap not found');
});

// Redirect /seo-geo-aio.html to /seo-geo-aio
app.get('/seo-geo-aio.html', (req, res) => {
  return res.redirect(301, '/seo-geo-aio');
});

// Serve static assets from public/ and dist/
app.use(express.static(path.resolve(__dirname, 'public')));
if (hasDist) {
  app.use(express.static(distDir, { index: false }));
}

// Serve pre-rendered HTML files when available in dist/
app.use((req, res, next) => {
  if (!hasDist) return next();

  const rawPath = req.originalUrl.split('?')[0];
  const cleanPath = rawPath === '/' ? '' : rawPath.replace(/^\//, '').replace(/\/$/, '');

  const targetHtmlPath = cleanPath === ''
    ? path.resolve(distDir, 'index.html')
    : path.resolve(distDir, cleanPath, 'index.html');

  if (fs.existsSync(targetHtmlPath)) {
    return res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).sendFile(targetHtmlPath);
  }

  // If path is not a valid static file and hasDist is true, serve 404
  const notFoundPath = path.resolve(distDir, '404.html');
  if (fs.existsSync(notFoundPath)) {
    return res.status(404).set({ 'Content-Type': 'text/html; charset=utf-8' }).sendFile(notFoundPath);
  }

  return res.status(404).send('404 - Page Not Found');
});

// Vite Dev Server fallback if dist/ is not built
const { createServer: createViteServer } = await import('vite');
const vite = await createViteServer({
  server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
  appType: 'custom',
});
app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(template);
  } catch (e) {
    vite.ssrFixStacktrace(e as Error);
    next(e);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] Running on http://0.0.0.0:${PORT}`);
});
