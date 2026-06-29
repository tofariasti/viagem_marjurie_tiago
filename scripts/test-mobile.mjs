import { chromium, devices } from 'playwright';

const BASE = 'http://localhost:8765';
const viewports = [
  { name: 'iPhone SE', ...devices['iPhone SE'] },
  { name: 'iPhone 14', ...devices['iPhone 14'] },
  { name: 'Pixel 7', ...devices['Pixel 7'] },
];

const issues = [];

async function checkPage(page, label) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      hasHorizontalScroll: doc.scrollWidth > doc.clientWidth + 1,
    };
  });

  if (overflow.hasHorizontalScroll) {
    issues.push(`${label}: scroll horizontal (${overflow.scrollWidth}px > ${overflow.clientWidth}px)`);
  }

  const smallTargets = await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('button, .btn')];
    return buttons.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 36);
    }).length;
  });

  if (smallTargets > 3) {
    issues.push(`${label}: ${smallTargets} botões com área de toque pequena`);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: vp.viewport,
      userAgent: vp.userAgent,
      isMobile: vp.isMobile,
      hasTouch: vp.hasTouch,
    });
    const page = await context.newPage();
    await page.goto(BASE, { waitUntil: 'networkidle' });

    await checkPage(page, `${vp.name} — home`);

    await page.click('[data-action="detail"]');
    await page.waitForSelector('.modal-overlay.open');
    await checkPage(page, `${vp.name} — modal`);

    await page.click('#modal-close');
    await page.click('[data-action="compare"]');
    await page.click('[data-action="compare"]');
    await checkPage(page, `${vp.name} — comparador`);

    await page.screenshot({
      path: `scripts/screenshots/${vp.name.replace(/\s/g, '-')}-home.png`,
      fullPage: true,
    });

    await context.close();
  }

  await browser.close();

  if (issues.length) {
    console.log('PROBLEMAS ENCONTRADOS:');
    issues.forEach((i) => console.log(' -', i));
    process.exit(1);
  }
  console.log('OK: sem scroll horizontal nos viewports testados');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
