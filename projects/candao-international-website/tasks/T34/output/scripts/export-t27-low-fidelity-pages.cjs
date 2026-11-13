const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const packageDir = 'tasks/T27/output/stitch-ready-low-fidelity';
const pageMapPath = path.resolve(root, packageDir, 'stitch-ready-page-map.json');
const outputDir = path.resolve(root, 'tasks/T34/output/images');
const reportPath = path.resolve(root, 'tasks/T34/output/qa/t27-low-fidelity-image-export-check-2026-08-19.json');

function slug(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function loadTargets() {
  const pageMap = JSON.parse(fs.readFileSync(pageMapPath, 'utf8'));
  const pages = [
    {
      id: 'index',
      title: '低保真總覽',
      file: pageMap.entry || 'index.html',
    },
    ...pageMap.pages.map((page) => ({
      id: page.id,
      title: page.title,
      file: page.file,
    })),
  ];

  return pages.map((page, index) => ({
    ...page,
    source: path.resolve(root, packageDir, page.file),
    output: path.resolve(outputDir, `${String(index + 1).padStart(2, '0')}-${slug(page.id)}-low-fidelity-1440-full.png`),
  }));
}

async function main() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const targets = loadTargets();
  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    ...(fs.existsSync(chromePath) ? { executablePath: chromePath } : {}),
  });

  const results = [];

  for (const target of targets) {
    if (!fs.existsSync(target.source)) {
      results.push({
        id: target.id,
        title: target.title,
        source: path.relative(root, target.source),
        output: path.relative(root, target.output),
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

    await page.goto(`file://${target.source}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: target.output, fullPage: true, animations: 'disabled' });

    const dimensions = await page.evaluate(() => ({
      browserTitle: document.title,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      documentWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
      documentHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
    }));
    await page.close();

    const stat = fs.statSync(target.output);
    results.push({
      id: target.id,
      title: target.title,
      file: target.file,
      source: path.relative(root, target.source),
      output: path.relative(root, target.output),
      status: stat.size > 0 ? 'pass' : 'fail',
      file_size_bytes: stat.size,
      ...dimensions,
    });
  }

  await browser.close();

  const failed = results.filter((result) => result.status !== 'pass');
  const report = {
    suite: 'T34 T27 stitch-ready low-fidelity image export',
    generated_at: '2026-08-19',
    input_entry: path.join(packageDir, 'index.html'),
    viewport: { width: 1440, height: 1200, fullPage: true },
    total: results.length,
    passed: results.length - failed.length,
    failed: failed.length,
    status: failed.length === 0 ? 'pass' : 'fail',
    results,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify(report, null, 2));

  if (failed.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
