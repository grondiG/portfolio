/**
 * i18n core. English is the default (served at `/`); Polish lives at `/pl/`.
 * Content data modules expose `getX(lang)` getters that resolve `L10n` fields
 * to plain strings, so components stay simple and type-safe.
 */

export const LOCALES = ['en', 'pl'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = 'en';

export const LOCALE_META: Record<Lang, { label: string; short: string; htmlLang: string }> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en' },
  pl: { label: 'Polski', short: 'PL', htmlLang: 'pl' },
};

/** A value provided in every supported locale. */
export type L10n<T = string> = Record<Lang, T>;

/** Resolve a localized value for a language. */
export const tr = <T>(value: L10n<T>, lang: Lang): T => value[lang];

/** Narrow `Astro.currentLocale` (string | undefined) to our union. */
export function toLang(locale: string | undefined): Lang {
  return (LOCALES as readonly string[]).includes(locale ?? '') ? (locale as Lang) : DEFAULT_LOCALE;
}

/** The same page in the target language. Single-page site: `/` ⇄ `/pl/`. */
export function alternatePath(pathname: string, target: Lang): string {
  const base = pathname.replace(/^\/pl(?=\/|$)/, '') || '/';
  if (target === DEFAULT_LOCALE) return base;
  return base === '/' ? '/pl/' : `/pl${base}`;
}
