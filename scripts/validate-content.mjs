import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredRoutes = [
  "src/app/page.tsx",
  "src/app/energy-systems/page.tsx",
  "src/app/energy-systems/[slug]/page.tsx",
  "src/app/embedded-signal-systems/page.tsx",
  "src/app/embedded-signal-systems/[slug]/page.tsx",
];
const requiredAssets = [
  "public/GiorgiGogitidzeLinkedin.webp",
  "public/engineering/site-og.webp",
  "public/engineering/energy-og.webp",
  "public/engineering/embedded-og.webp",
  "public/engineering/commercial/one-line.webp",
  "public/engineering/commercial/bus-voltage-scenarios.webp",
  "public/engineering/microgrid/architecture.webp",
  "public/engineering/microgrid/optimized-dispatch.webp",
  "public/engineering/grid/network-most-severe.webp",
  "public/engineering/grid/severity-ranking.webp",
  "public/engineering/daq/architecture.webp",
  "public/engineering/daq/simulated-capture.webp",
  "public/engineering/bearing/envelope-hero.webp",
  "public/engineering/bearing/cross-load-evidence.webp",
  "public/engineering/ecg/waveform-detection.webp",
  "public/engineering/ecg/filter-response.webp",
];
const downloadRoots = [
  "commercial-power-distribution",
  "microgrid-energy-management",
  "grid-contingency-analysis",
  "stm32-data-acquisition",
  "bearing-condition-monitoring",
  "ecg-signal-processing",
];

const missing = [...requiredRoutes, ...requiredAssets].filter((item) => !fs.existsSync(path.join(root, item)));
for (const folder of downloadRoots) {
  const directory = path.join(root, "public", "downloads", folder);
  if (!fs.existsSync(directory) || fs.readdirSync(directory).length < 3) missing.push(`public/downloads/${folder} (three proof files required)`);
}
if (missing.length) throw new Error(`Missing required portfolio files:\n${missing.join("\n")}`);

const oldPublicAssets = ["poster-gpt-rl.webp", "poster-lstm-stock.webp", "snippedia-screenshot.png", "codeboard-screenshot.png", "taskflow-screenshot.png", "Giorgi_Gogitidze_Resume.pdf"];
const stale = oldPublicAssets.filter((item) => fs.existsSync(path.join(root, "public", item)));
if (stale.length) throw new Error(`Obsolete software assets remain public:\n${stale.join("\n")}`);

console.log("Portfolio route, visual, download, and obsolete-asset checks passed.");
