import fs from "node:fs";
import { chromium, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const base = process.env.AUDIT_URL || "http://127.0.0.1:4318";
const b = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});
const results = [];
fs.mkdirSync("../qa/animation", { recursive: true });
for (const width of [320, 390, 1440]) {
  const ctx = await b.newContext({ viewport: { width, height: 1000 } });
  const p = await ctx.newPage();
  await p.goto(base + "/#como-funciona", { waitUntil: "networkidle" });
  const f = p.locator(".explainer-animation");
  await f.scrollIntoViewIfNeeded();
  await expect(f).toHaveClass(/is-playing/);
  const initial = await f.getAttribute("data-phase");
  await p.waitForFunction(
    (old) =>
      document
        .querySelector(".explainer-animation")
        ?.getAttribute("data-phase") !== old,
    initial,
    { timeout: 6000 },
  );
  await f.getByRole("button", { name: "Pausar animação", exact: true }).click();
  const phase = await f.getAttribute("data-phase");
  await p.waitForTimeout(3400);
  expect(await f.getAttribute("data-phase")).toBe(phase);
  expect(
    await f
      .locator(".route-ink")
      .first()
      .evaluate((e) => getComputedStyle(e).animationPlayState),
  ).toBe("paused");
  for (const name of [
    "SEO técnico",
    "Pesquisa e intenção",
    "Conteúdo",
    "Busca local",
    "GEO e AIO",
    "Medição",
    "Navegação e contato",
  ]) {
    await f.getByRole("button", { name, exact: true }).click();
    await f.locator(".diagram-stages button").nth(2).click();
    expect(await f.getAttribute("data-phase")).toBe("2");
    await expect(f.locator("svg")).toBeVisible();
    expect(await f.locator(".diagram-transcript li").count()).toBe(4);
    if (width === 390)
      await f.screenshot({
        path:
          "../qa/animation/" + (await f.getAttribute("data-topic")) + ".png",
      });
  }
  const axe = await new AxeBuilder({ page: p })
    .include(".explainer-animation")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  const overflow = await p.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  results.push({
    width,
    autoplay: true,
    pause: true,
    topics: 7,
    overflow,
    violations: axe.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  });
  await ctx.close();
}
const p = await b.newPage({
  viewport: { width: 390, height: 900 },
  reducedMotion: "reduce",
});
for (const [route, topic] of [
  ["/seo-tecnico", "technical"],
  ["/seo-local", "local"],
  ["/geo-ia", "ai"],
  ["/servicos/consultoria-seo", "research"],
]) {
  await p.goto(base + route, { waitUntil: "networkidle" });
  const f = p.locator(".explainer-animation");
  await f.scrollIntoViewIfNeeded();
  await expect(f).toHaveAttribute("data-topic", topic);
  await expect(f).toHaveClass(/is-paused/);
  expect(
    await f
      .locator(".route-ink")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
  results.push({ route, topic, reducedMotion: true });
}
await p.close();
const nojs = await b.newPage({ javaScriptEnabled: false });
await nojs.goto(base + "/");
expect(await nojs.locator(".diagram-transcript li").count()).toBe(4);
results.push({ noJS: true, staticExplanation: true });
await b.close();
fs.writeFileSync(
  "../qa/animation/results.json",
  JSON.stringify(results, null, 2),
);
console.log(JSON.stringify(results, null, 2));
if (results.some((r) => r.overflow || r.violations?.length))
  process.exitCode = 1;
