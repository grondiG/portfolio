/**
 * Tailwind configuration — "GRONDYS / Index"
 * ------------------------------------------------------------------
 * A deliberately editorial / brutalist token set. Colours are driven by
 * OKLCH custom properties declared in `src/styles/global.css` so the palette
 * stays perceptually uniform and is tinted toward the oxblood brand hue (27°).
 * Type is a three-voice system: Archivo (dialed to an Expanded Black display
 * cut), Hanken Grotesk for reading, Martian Mono for structural labels.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,md,mdx}'],
  // Single explicit theme — this build commits to light. No `dark:` variants.
  darkMode: 'class',
  theme: {
    // A tighter, editorial breakpoint ladder.
    screens: {
      xs: '30rem', // 480
      sm: '40rem', // 640
      md: '48rem', // 768
      lg: '64rem', // 1024
      xl: '80rem', // 1280
      '2xl': '96rem', // 1536
    },
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-sunk': 'var(--paper-sunk)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-muted': 'var(--ink-muted)',
        oxblood: 'var(--oxblood)',
        'oxblood-deep': 'var(--oxblood-deep)',
        'on-ink': 'var(--paper-on-ink)',
        'on-ink-muted': 'var(--muted-on-ink)',
        rule: 'var(--rule)',
        'rule-strong': 'var(--rule-strong)',
        'rule-on-ink': 'var(--rule-on-ink)',
      },

      fontFamily: {
        // `display` is Archivo; we push its `wdth` axis to 125 (Expanded) and
        // `wght` to 800–900 via utilities/components for the brutalist masthead.
        display: ['"Archivo Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Martian Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      fontSize: {
        // Fluid display scale (clamp) — for the masthead + section heads only.
        mega: ['clamp(3.25rem, 0.5rem + 11vw, 12rem)', { lineHeight: '0.84', letterSpacing: '-0.035em' }],
        display: ['clamp(2.4rem, 0.9rem + 6.2vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.028em' }],
        h1: ['clamp(2rem, 1rem + 3.4vw, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.6rem, 1rem + 2vw, 2.85rem)', { lineHeight: '1.0', letterSpacing: '-0.016em' }],
        h3: ['clamp(1.2rem, 0.9rem + 1vw, 1.6rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        // Fixed reading scale.
        lede: ['clamp(1.15rem, 1rem + 0.6vw, 1.5rem)', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        body: ['1.0625rem', { lineHeight: '1.62' }],
        sm: ['0.9375rem', { lineHeight: '1.55' }],
        // Mono structural labels — tracked out, optically small.
        label: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'label-sm': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        'label-xs': ['0.625rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },

      letterSpacing: {
        tightest: '-0.045em',
        label: '0.18em',
         wide2: '0.28em',
      },

      maxWidth: {
        wrap: '90rem', // 1440 — the sheet
        prose: '68ch',
        measure: '54ch',
        narrow: '42ch',
      },

      spacing: {
        // Fluid vertical rhythm + page gutters.
        section: 'clamp(4.5rem, 2rem + 9vw, 9.5rem)',
        gutter: 'clamp(1.25rem, 0.4rem + 3vw, 3.75rem)',
        'header-h': '3.5rem',
      },

      borderWidth: {
        DEFAULT: '1px',
        '1.5': '1.5px',
        3: '3px',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          '0%, 55%': { opacity: '1' },
          '56%, 100%': { opacity: '0' },
        },
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(1.1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        marquee: 'marquee var(--marquee-duration, 42s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 42s) linear infinite',
        blink: 'blink 1.15s steps(1, end) infinite',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
