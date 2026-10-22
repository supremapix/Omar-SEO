import fs from "node:fs";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const reports = [];
for (const width of [320, 390, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  for (const route of [
    "/",
    "/seo-geo-aio",
    "/servicos/consultoria-seo",
    "/contato",
  ]) {
    await page.goto("http://127.0.0.1:4318" + route, {
      waitUntil: "networkidle",
    });
    const r = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    reports.push({
      width,
      route,
      overflow: await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      violations: r.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
  }
  await context.close();
}
await browser.close();
fs.writeFileSync("../qa/accessibility.json", JSON.stringify(reports, null, 2));
console.log(JSON.stringify(reports, null, 2));

