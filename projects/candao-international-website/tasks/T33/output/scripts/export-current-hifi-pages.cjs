const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const pages = [
  {
    id: 'home',
    title: 'Home',
    source: 'tasks/T17/output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd.html',
    output: 'tasks/T33/output/images/home-hifi-1440-full.png',
  },
  {
    id: 'platform',
    title: 'Platform',
    source: 'tasks/T17/output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3.html',
    output: 'tasks/T33/output/images/platform-hifi-1440-full.png',
  },
];

async function main() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const launchOptions = {
    headless: true,
    ...(fs.existsSync(chromePath) ? { executablePath: chromePath } : {}),
  };
  const browser = await chromium.launch(launchOptions);
  const results = [];

  for (const item of pages) {
    const sourcePath = path.resolve(root, item.source);
    const outputPath = path.resolve(root, item.output);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    if (!fs.existsSync(sourcePath)) {
      results.push({
        id: item.id,
        title: item.title,
        source: item.source,
        output: item.output,
        status: 'fail',
        reason: 'source_not_found',
      });
      continue;
    }

    const page = await browser.newPage({
      viewport: { width: 1440, height: 1200 },
      deviceScaleFactor: 1,
      colorScheme: 'light',
    });

    await page.goto(`file://${sourcePath}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: outputPath, fullPage: true, animations: 'disabled' });

    const dimensions = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      documentWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
      documentHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
      title: document.title,
    }));
    const stat = fs.statSync(outputPath);
    await page.close();

    results.push({
      id: item.id,
      title: item.title,
      source: item.source,
      output: item.output,
      status: stat.size > 0 ? 'pass' : 'fail',
      file_size_bytes: stat.size,
      ...dimensions,
    });
  }

  await browser.close();

  const failed = results.filter((item) => item.status !== 'pass');
  const report = {
    suite: 'T33 current formal high-fidelity page image export',
    generated_at: '2026-08-19',
    viewport: { width: 1440, height: 1200, fullPage: true },
    source_scope: 'tasks/T17/output/design-handoff/.stitch/designs formal HTML only',
    excluded: ['T32 Customers failed Stitch screen'],
    total: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    status: failed.length === 0 ? 'pass' : 'fail',
    results,
  };

  const reportPath = path.resolve(root, 'tasks/T33/output/qa/hifi-page-image-export-check-2026-08-19.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

  if (failed.length > 0) {
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
