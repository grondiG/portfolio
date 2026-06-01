// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Public canonical origin. Swap for the production domain when it goes live.
  site: 'https://arkadiuszgrondys.dev',

  // English at `/`, Polish at `/pl/`. Default locale is not prefixed.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    tailwind({
      // We own the base layer entirely in src/styles/global.css so that the
      // brutalist reset (zero radius, custom selection, optical rules) is
      // intentional rather than inherited from Tailwind's Preflight defaults.
      applyBaseStyles: false,
    }),
  ],

  // Link prefetching keeps in-page + future multi-page navigation instant
  // without shipping a client framework. Pairs with <ClientRouter />.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  build: {
    // Inline tiny stylesheets to shave a request on first paint.
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
