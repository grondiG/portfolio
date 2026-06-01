import { type Lang, type L10n, tr } from '@/i18n/config';

/**
 * Client testimonials.
 * ------------------------------------------------------------------
 * Structure + styling are ready; the words are not mine to write. Each entry
 * stays `published: false` until a real quote is filled in. `getTestimonials`
 * only returns published entries that actually have a quote, so the section
 * renders NOTHING (no empty frames) until you add one.
 *
 * To publish: write `quote.en` + `quote.pl`, set `author`/`role`, flip
 * `published` to true. See the // TODO markers below.
 */

export interface Testimonial {
  readonly id: string;
  readonly published: boolean;
  readonly author: string;
  readonly role: string;
  readonly company: string;
  readonly quote: string;
}

interface TestimonialRaw extends Omit<Testimonial, 'role' | 'quote'> {
  readonly role: L10n;
  readonly quote: L10n;
}

const testimonialsRaw: readonly TestimonialRaw[] = [
  {
    id: 'luxmeria',
    published: false, // TODO: set true once the quote is filled in
    company: 'Luxmeria',
    author: '', // TODO: client name (e.g. "Anna K.")
    role: { en: '', pl: '' }, // TODO: client role/title (e.g. "Owner" / "Właścicielka")
    quote: {
      en: '', // TODO: client quote (English)
      pl: '', // TODO: cytat klienta (Polski)
    },
  },
  {
    id: 'expo-aluminium',
    published: false, // TODO: set true once the quote is filled in
    company: 'Expo Aluminium',
    author: '', // TODO: client name
    role: { en: '', pl: '' }, // TODO: client role/title
    quote: {
      en: '', // TODO: client quote (English)
      pl: '', // TODO: cytat klienta (Polski)
    },
  },
];

/** Only published entries that actually carry a quote in this language. */
export function getTestimonials(lang: Lang): readonly Testimonial[] {
  return testimonialsRaw
    .filter((tm) => tm.published && tr(tm.quote, lang).trim().length > 0)
    .map((tm) => ({
      id: tm.id,
      published: tm.published,
      company: tm.company,
      author: tm.author,
      role: tr(tm.role, lang),
      quote: tr(tm.quote, lang),
    }));
}
