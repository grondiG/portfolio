# Arkadiusz Grondys — Portfolio

Personal portfolio for a full-stack developer based in Wrocław.

**Live:** https://portfolio-gr0ndi.vercel.app/

It's a single long-scroll page — hero, profile, stack, selected work, experience,
education, contact — available in English (`/`) and Polish (`/pl/`).

The look is deliberately not the default dark-mode-with-purple-glow template.
It's closer to a printed design annual: warm paper, near-black ink, a single
oxblood accent, oversized Archivo set in its expanded width, and monospaced
labels used as structure rather than decoration. No rounded corners, no drop
shadows.

## Stack

- **Astro 5** — static output, no UI framework. The only JavaScript that ships
  is a small vanilla enhancement script (scroll reveals, scrollspy, the mobile
  menu, the capture-frame loader) plus Astro's view-transitions router. No
  hydration.
- **Tailwind CSS 3** over a layer of CSS design tokens — OKLCH colours, tinted
  toward the brand hue; a fluid type scale; custom animations.
- **TypeScript**, strict.
- **Fonts** self-hosted with Fontsource — Archivo (display, width axis pushed to
  125 for the masthead), Hanken Grotesk (body), Martian Mono (labels). No
  external font requests.
- **Playwright** for the project screenshots — see below.
- Deployed on **Vercel**.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static build to dist/
npm run preview    # serve the build locally
```

## Project screenshots

The work section shows full-page screenshots of each live site. They're
generated, not pasted in by hand. `scripts/capture.mjs` drives headless
Chromium, accepts cookie banners (Cookiebot / OneTrust / Complianz / …), waits
for the page to load and settle, then writes a full-page PNG to the exact path
each project points at in `src/data/projects.ts`.

```bash
npx playwright install chromium   # one-time
npm run capture
```

Until a capture exists for a project, its card renders a designed "awaiting
capture" plate instead of a broken image — so the page is never half-built.

## Languages

English is the default (`/`), Polish lives at `/pl/`. UI strings are in
`src/i18n/ui.ts`; the content data modules expose `getX(lang)` getters that
resolve the right language at build time. The "Full-Stack Developer" wordmark
and the tech names stay in English in both locales — that's intentional, not a
missing translation.

## Layout

```
src/
  components/   page sections + small UI pieces
  layouts/      document shell — SEO, fonts, view transitions
  pages/        index.astro (en) · pl/index.astro
  data/         site, projects, experience, stack, education
  i18n/         locale config + UI strings
  lib/          icon set
  styles/       tokens, base reset, utilities
scripts/        capture.mjs (Playwright)
public/         favicon + generated screenshots
```

Most content edits start in `src/data/` — change it there and it propagates
through both languages.

## License

Personal project. The CV content and screenshots are © Arkadiusz Grondys; the
code is here to read.
