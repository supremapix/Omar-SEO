import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const app = express();
const port = Number(process.env.PORT || 3000);
app.use((req, res, next) => {
  if (req.hostname === "omarseo.digital")
    return res.redirect(301, "https://www.omarseo.digital" + req.originalUrl);
  next();
});
const redirects: Record<string, string> = {
  "/seo-geo-aio.html": "/seo-geo-aio",
  "/como-ganhar-mercado": "/seo-geo-aio",
  "/omar-skafi": "/sobre",
  "/portfolio/seo-instalacao-frigorifica-navegantes":
    "/resultados/seo-instalacao-frigorifica-navegantes",
  "/portfolio/seo-aio-persianas-lagoa-da-conceicao-florianopolis":
    "/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis",
};
app.use((req, res, next) => {
  const target = redirects[req.path];
  if (target) return res.redirect(301, target);
  if (req.path.length > 1 && req.path.endsWith("/"))
    return res.redirect(
      301,
      req.path.replace(/\/$/, "") + req.originalUrl.slice(req.path.length),
    );
  next();
});
if (fs.existsSync(path.join(dist, "index.html"))) {
  app.use(express.static(dist, { index: false, redirect: false }));
  app.use((req, res) => {
    let pathname: string;
    try {
      pathname = decodeURIComponent(req.path);
    } catch {
      return res.status(400).send("Invalid path");
    }
    const target = path.resolve(dist, "." + pathname, "index.html");
    if (target.startsWith(dist + path.sep) && fs.existsSync(target))
      return res.sendFile(target);
    res.status(404).sendFile(path.join(dist, "404.html"));
  });
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
}
app.listen(port, "127.0.0.1", () =>
  console.log("Omar SEO on http://127.0.0.1:" + port),
);
