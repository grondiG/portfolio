/**
 * Full-page screenshot automation.
 * ------------------------------------------------------------------
 * Captures each live project URL and writes a full-page PNG to the EXACT
 * path referenced by `thumbnailPlaceholder` in src/data/projects.ts. The
 * portfolio's <ProjectCard> picks the files up automatically on next load.
 *
 * Handles the messy reality of live sites:
 *   - accepts / dismisses cookie-consent dialogs (Cookiebot, OneTrust,
 *     Complianz, CookieYes, generic text + a hard fallback that removes
 *     leftover fixed banners),
 *   - scrolls to trigger lazy media, then waits for fonts + images,
 *   - uses `load` (not the flaky `networkidle`) as the gate.
 *
 * One-time setup (downloads the headless browser):
 *     npx playwright install chromium
 *
 * Run:
 *     npm run capture
 *
 * The `targets` list mirrors `id` + `captureUrl` from projects.ts — keep in sync.
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir } from 'node:fs/promises';

const here = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(here, '..', 'public', 'images', 'screenshots');

/** @type {{ id: string; url: string }[]} */
const targets = [
  { id: 'expo-aluminium', url: 'https://expo-aluminium.pl/' },
  { id: 'euro-pflasterarbeiten', url: 'https://euro-pflasterarbeiten.de/' },
  { id: 'luxmeria', url: 'https://luxmeria.pl/' },
  { id: 'hot-drop', url: 'https://hot-drop.pl/' },
];

const VIEWPORT = { width: 1440, height: 1024 };

/** Click the accept button of any consent dialog we recognise, then hard-remove leftovers. */
async function dismissConsent(page) {
  const acceptSelectors = [
    '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', // Cookiebot (multilevel)
    '#CybotCookiebotDialogBodyButtonAccept', // Cookiebot (simple)
    '#onetrust-accept-btn-handler', // OneTrust
    '.cmplz-accept', // Complianz (WordPress)
    '#wt-cli-accept-all-btn', // CookieYes / GDPR Cookie Consent
    '.cky-btn-accept', // CookieYes (new)
    '#cookiescript_accept', // CookieScript
    '[data-cookiefirst-action="accept"]', // CookieFirst
    '.cc-allow',
    '.cc-accept-all', // Cookie Consent by Osano
  ];
  for (const sel of acceptSelectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 600 })) {
        await el.click({ timeout: 2000 });
        await page.waitForTimeout(500);
      }
    } catch {
      /* selector absent — fine */
    }
  }

  // Text-based fallback across PL / DE / EN.
  const labels =
    /^(accept all|allow all|accept|i agree|got it|zgadzam|akceptuj|zezwól|akceptuję|zgoda|alle akzeptieren|akzeptieren|zustimmen|einverstanden)/i;
  try {
    const btn = page.getByRole('button', { name: labels }).first();
    if (await btn.isVisible({ timeout: 600 })) {
      await btn.click({ timeout: 2000 });
      await page.waitForTimeout(500);
    }
  } catch {
    /* none found */
  }

  // Hard fallback: remove any remaining fixed/sticky consent container and
  // restore scrolling (some CMPs lock <body> overflow).
  await page.evaluate(() => {
    const ids = [
      'CybotCookiebotDialog',
      'onetrust-consent-sdk',
      'onetrust-banner-sdk',
      'cookiescript_injected',
      'cmplz-cookiebanner-container',
      'cookie-law-info-bar',
      'cky-consent',
    ];
    ids.forEach((id) => document.getElementById(id)?.remove());
    document
      .querySelectorAll('[class*="cookie" i],[class*="consent" i],[id*="cookie" i],[aria-label*="cookie" i]')
      .forEach((el) => {
        const pos = getComputedStyle(el).position;
        if (pos === 'fixed' || pos === 'sticky') el.remove();
      });
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  });
}

/** Scroll top→bottom→top so lazy media renders, then wait for fonts + images. */
async function settle(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = window.innerHeight * 0.8;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 150);
    });
  });
  // Wait for fonts + images, but CAP it — a single never-resolving lazy image
  // must not hang the whole capture (this was the bug).
  await page
    .evaluate(async () => {
      const cap = (p, ms) =>
        Promise.race([p, new Promise((r) => setTimeout(r, ms))]);
      const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
      const images = Promise.all(
        Array.from(document.images).map((img) =>
          img.complete
            ? null
            : new Promise((res) => {
                img.addEventListener('load', res, { once: true });
                img.addEventListener('error', res, { once: true });
              }),
        ),
      );
      await cap(Promise.all([fonts, images]), 6000);
    })
    .catch(() => {});
  await page.waitForTimeout(1500);
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    // 1× keeps file weight sane. The plates display ~600px wide, so a 1440px-wide
    // capture is still crisp when downscaled — even on retina. Bump to 2 only if
    // you need pixel-peeping fidelity (≈4× the bytes).
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0 Safari/537.36 PortfolioCaptureBot',
  });

  let ok = 0;
  for (const target of targets) {
    const page = await context.newPage();
    const file = join(OUT_DIR, `${target.id}.png`);
    try {
      process.stdout.write(`→ ${target.id.padEnd(22)} ${target.url}\n`);
      // `load` is reliable; `networkidle` is best-effort (some sites never idle).
      await page.goto(target.url, { waitUntil: 'load', timeout: 60_000 });
      await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
      await page.waitForTimeout(1800); // let the consent dialog mount
      await dismissConsent(page);
      await settle(page);
      await dismissConsent(page); // catch banners that re-mount after scroll
      await page.screenshot({ path: file, fullPage: true });
      process.stdout.write(`  ✓ saved ${file}\n`);
      ok += 1;
    } catch (err) {
      process.stderr.write(`  ✗ ${target.id}: ${err instanceof Error ? err.message : err}\n`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  process.stdout.write(`\nDone — ${ok}/${targets.length} captured into public/images/screenshots/\n`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
