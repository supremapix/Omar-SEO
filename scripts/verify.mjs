import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
const base = process.env.AUDIT_URL || "http://127.0.0.1:4317";
const root = path.resolve("dist");
const reports = [];
const errors = [];
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}
const files = walk(root).filter((f) => f.endsWith("index.html"));
const aliases = new Set([
  "/omar-skafi",
  "/como-ganhar-mercado",
  "/seo-geo-aio.html",
  "/portfolio/seo-instalacao-frigorifica-navegantes",
  "/portfolio/seo-aio-persianas-lagoa-da-conceicao-florianopolis",
]);
for (const file of files) {
  if (path.dirname(file) !== root && fs.existsSync(path.dirname(file) + ".html")) errors.push("cleanUrls collision: " + file);
  const html = fs.readFileSync(file, "utf8");
  const route =
    "/" + path.relative(root, path.dirname(file)).split(path.sep).join("/");
  const canon = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)];
  if (canon.length !== 1)
    errors.push(route + ": canonical count " + canon.length);
  else if (
    !canon[0][0].includes('href="https://www.omarseo.digital' + route + '"')
  )
    errors.push(route + ": canonical mismatch " + canon[0][0]);
  if ((html.match(/<h1[ >]/g) || []).length !== 1)
    errors.push(route + ": H1 count");
  if (!/<meta[^>]*property="og:image"[^>]*content="https:\/\//.test(html))
    errors.push(route + ": OG missing");
  for (const m of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(m[1]);
    } catch {
      errors.push(route + ": invalid JSON-LD");
    }
  }
  if (html.includes("Conteúdo completo em breve"))
    errors.push(route + ": article fallback");
  for (const m of html.matchAll(/(?:href|src)="(\/(?!\/)[^"#?]*)/g)) {
    let link = decodeURIComponent(m[1]);
    if (aliases.has(link)) continue;
    const f = path.join(root, link);
    if (!fs.existsSync(f) && !fs.existsSync(path.join(f, "index.html")))
      errors.push(route + ": missing " + link);
  }
}
const ico = fs.readFileSync("public/favicon.ico");
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 3);
assert.deepEqual([ico[6], ico[22], ico[38]], [16, 32, 48]);
reports.push({ staticPages: files.length, errors: [...new Set(errors)] });
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
fs.mkdirSync("../qa", { recursive: true });
for (const width of [320, 390, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 960 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const jsErrors = [];
  page.on("pageerror", (e) => jsErrors.push(e.message));
  await page.goto(base, { waitUntil: "networkidle" });
  await page.locator(".evidence-image").scrollIntoViewIfNeeded();
  await page.locator(".evidence-image img").evaluate((img) => img.decode());
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({
    path: "../qa/home-" + width + ".png",
    fullPage: true,
  });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  const missing = await page
    .locator("img")
    .evaluateAll((imgs) =>
      imgs.filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src),
    );
  await page.keyboard.press("Tab");
  const skip = await page.evaluate(() => document.activeElement?.textContent);
  await page.keyboard.press("Enter");
  const focus = await page.evaluate(() => document.activeElement?.id);
  if (width < 1080) {
    await page.locator(".mobile-menu summary").click();
    await page
      .getByRole("navigation", { name: "Navegação móvel" })
      .getByRole("link", { name: "Guias e dúvidas", exact: true })
      .click();
    await page.waitForURL("**/blog");
  }
  reports.push({ width, overflow, missing, jsErrors, skip, focus });
  await context.close();
}
const context = await browser.newContext({
  javaScriptEnabled: false,
  viewport: { width: 390, height: 844 },
});
const page = await context.newPage();
for (const route of [
  "/",
  "/seo-geo-aio",
  "/blog/seo-vs-sem-como-escolher",
  "/blog/por-que-site-nao-aparece-no-google",
  "/resultados/sangel-purificadores-bebedouros-curitiba",
  "/nao-existe-auditoria-omar",
]) {
  const response = await page.goto(base + route);
  reports.push({
    route,
    status: response.status(),
    h1: await page.locator("h1").allTextContents(),
    mainTextLength: (await page.locator("#main-content").innerText()).length,
  });
}
await browser.close();
fs.writeFileSync("../qa/report.json", JSON.stringify(reports, null, 2));
console.log(JSON.stringify(reports, null, 2));
if (errors.length) process.exitCode = 1;
