import { chromium } from "playwright-core";
import axe from "axe-core";

const baseUrl = process.env.PORTFOLIO_BASE_URL ?? "http://127.0.0.1:3000";
const executablePath = process.env.EDGE_PATH ?? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const routes = [
  "/",
  "/energy-systems",
  "/energy-systems/commercial-power-distribution",
  "/energy-systems/microgrid-energy-management",
  "/energy-systems/grid-contingency-analysis",
  "/embedded-signal-systems",
  "/embedded-signal-systems/stm32-data-acquisition",
  "/embedded-signal-systems/bearing-condition-monitoring",
  "/embedded-signal-systems/ecg-signal-processing",
];

const failures = [];
const browser = await chromium.launch({ executablePath, headless: true });

async function checkPage(page, route, viewportName) {
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  if (!response?.ok()) failures.push(`${viewportName} ${route}: HTTP ${response?.status() ?? "no response"}`);

  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => element.complete
      ? undefined
      : new Promise((resolve) => {
          element.addEventListener("load", resolve, { once: true });
          element.addEventListener("error", resolve, { once: true });
        }));
  }
  await page.evaluate(() => window.scrollTo(0, 0));

  const diagnostics = await page.evaluate(() => ({
    h1Count: document.querySelectorAll("h1").length,
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    brokenImages: [...document.images]
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
    emptyLinks: [...document.querySelectorAll("a")]
      .filter((link) => !link.getAttribute("href"))
      .map((link) => link.textContent?.trim() || "unnamed link"),
  }));

  if (diagnostics.h1Count !== 1) failures.push(`${viewportName} ${route}: expected one h1, found ${diagnostics.h1Count}`);
  if (!diagnostics.canonical.startsWith("https://www.giorgigogitidze.com")) failures.push(`${viewportName} ${route}: invalid canonical`);
  if (diagnostics.overflow > 1) failures.push(`${viewportName} ${route}: ${diagnostics.overflow}px horizontal overflow`);
  if (diagnostics.brokenImages.length) failures.push(`${viewportName} ${route}: broken images ${diagnostics.brokenImages.join(", ")}`);
  if (diagnostics.emptyLinks.length) failures.push(`${viewportName} ${route}: links without href ${diagnostics.emptyLinks.join(", ")}`);

  await page.addScriptTag({ content: axe.source });
  const axeResults = await page.evaluate(async () => window.axe.run(document, {
    runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
  }));
  const serious = axeResults.violations.filter((violation) => ["serious", "critical"].includes(violation.impact));
  if (serious.length) failures.push(`${viewportName} ${route}: accessibility ${serious.map((item) => item.id).join(", ")}`);
}

try {
  const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const route of routes) await checkPage(desktop, route, "desktop");

  for (const destination of [
    { name: "Energy & Grid", path: "/energy-systems" },
    { name: "Embedded & Signal", path: "/embedded-signal-systems" },
  ]) {
    await desktop.goto(baseUrl, { waitUntil: "networkidle" });
    await desktop.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await desktop.getByRole("link", { name: destination.name, exact: true }).click();
    await desktop.waitForURL(`**${destination.path}`);
    await desktop.waitForFunction(() => window.scrollY === 0);
    const position = await desktop.evaluate(() => window.scrollY);
    if (position !== 0) failures.push(`${destination.path}: route navigation landed at scrollY=${position}`);
  }

  await desktop.goto(`${baseUrl}/energy-systems`, { waitUntil: "networkidle" });
  await desktop.getByRole("link", { name: "Education", exact: true }).click();
  await desktop.waitForURL("**/#education");
  await desktop.waitForFunction(() => {
    const target = document.getElementById("education");
    return target !== null && target.getBoundingClientRect().top >= 80 && target.getBoundingClientRect().top < 120;
  });
  await desktop.close();

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  for (const route of routes) await checkPage(mobile, route, "mobile");
  await mobile.goto(baseUrl, { waitUntil: "networkidle" });
  const menuButton = mobile.locator('button[aria-controls="primary-navigation"]');
  await menuButton.waitFor({ state: "visible" });
  await menuButton.focus();
  await mobile.keyboard.press("Enter");
  if ((await menuButton.getAttribute("aria-expanded")) !== "true") failures.push("mobile navigation did not open from the keyboard");
  if (!(await mobile.getByRole("navigation", { name: "Primary navigation" }).isVisible())) failures.push("mobile navigation is not visible after opening");
  await mobile.close();
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Browser smoke passed for ${routes.length} routes at desktop and mobile widths.`);
