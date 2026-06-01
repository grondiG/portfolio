import type { IconName } from '@/lib/icons';
import { type Lang, type L10n, tr } from '@/i18n/config';

export interface SocialLink {
  readonly key: string;
  readonly label: string;
  readonly handle: string;
  readonly href: string;
  readonly icon: IconName;
}

export interface NavItem {
  readonly index: string;
  readonly label: string;
  readonly href: string;
}

// "Full-Stack Developer" is treated as a job-title wordmark and stays in English
// across both locales (standard in Polish IT). Descriptive prose is localised.
const ROLE = 'Full-Stack Developer';

const navRaw: { index: string; label: L10n; href: string }[] = [
  { index: '01', label: { en: 'Profile', pl: 'Profil' }, href: '#profile' },
  { index: '02', label: { en: 'Stack', pl: 'Stack' }, href: '#stack' },
  { index: '03', label: { en: 'Work', pl: 'Projekty' }, href: '#work' },
  { index: '04', label: { en: 'Path', pl: 'Ścieżka' }, href: '#path' },
  { index: '05', label: { en: 'Contact', pl: 'Kontakt' }, href: '#contact' },
];

const content = {
  country: { en: 'Poland', pl: 'Polska' } satisfies L10n,
  statusLabel: { en: 'Available for work', pl: 'Dostępny do pracy' } satisfies L10n,
  statusDetail: {
    en: 'Freelance projects & full-time roles',
    pl: 'Projekty freelance i praca na etacie',
  } satisfies L10n,
  tagline: {
    en: 'I build responsive, scalable products — from component-level frontend to serverless backends on AWS.',
    pl: 'Tworzę responsywne, skalowalne produkty — od frontendu na poziomie komponentów po serverlessowe backendy w AWS.',
  } satisfies L10n,
  summary: {
    en: [
      'Full-Stack Developer with around four years of commercial experience across Angular, React, and Node.js. I build responsive, scalable web and mobile applications — from frontend engineering (components, lazy-loading, Material / Ionic) through serverless backends on AWS, CMS integrations, and payment systems.',
      'Currently a Business Informatics student, taking on freelance work while seeking a full-time role.',
    ],
    pl: [
      'Full-Stack Developer z około czteroletnim komercyjnym doświadczeniem w Angularze, React i Node.js. Tworzę responsywne, skalowalne aplikacje webowe i mobilne — od inżynierii frontendu (komponenty, lazy-loading, Material / Ionic) po serverlessowe backendy w AWS, integracje z CMS i systemy płatności.',
      'Obecnie studiuję informatykę w biznesie, realizuję projekty freelance i szukam pracy na pełen etat.',
    ],
  } satisfies L10n<readonly string[]>,
  meta: {
    title: {
      en: 'Arkadiusz Grondys — Full-Stack Developer',
      pl: 'Arkadiusz Grondys — Full-Stack Developer',
    } satisfies L10n,
    description: {
      en: 'Arkadiusz Grondys is a Full-Stack Developer in Wrocław, Poland, building responsive, scalable web & mobile applications with Angular, React, and Node.js — from frontend engineering to serverless backends on AWS.',
      pl: 'Arkadiusz Grondys — Full-Stack Developer z Wrocławia. Tworzy responsywne, skalowalne aplikacje webowe i mobilne w Angularze, React i Node.js — od frontendu po serverlessowe backendy w AWS.',
    } satisfies L10n,
  },
};

/** Static identity + contact that never changes between locales. */
const base = {
  name: 'Arkadiusz Grondys',
  shortName: 'Grondys',
  initials: 'AG',
  role: ROLE,
  roleStack: ['Angular', 'React', 'Node.js'] as const,
  location: {
    city: 'Wrocław',
    countryCode: 'PL',
    coordinates: { lat: '51.1079° N', lng: '17.0385° E' },
  },
  experience: { years: '4', since: 2022 },
  contact: {
    email: 'arkadiuszgrondys@proton.me',
    phone: { display: '+48 697 634 428', href: 'tel:+48697634428' },
  },
  socials: [
    { key: 'github', label: 'GitHub', handle: 'grondiG', href: 'https://github.com/grondiG', icon: 'github' },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      handle: 'arek-grondys',
      href: 'https://www.linkedin.com/in/arek-grondys-555b3a245/',
      icon: 'linkedin',
    },
  ] satisfies SocialLink[],
} as const;

/** Identity, contact and navigation resolved for a language. */
export function getSite(lang: Lang) {
  return {
    ...base,
    location: { ...base.location, country: tr(content.country, lang) },
    status: {
      available: true,
      label: tr(content.statusLabel, lang),
      detail: tr(content.statusDetail, lang),
    },
    tagline: tr(content.tagline, lang),
    summary: tr(content.summary, lang),
    nav: navRaw.map((n) => ({ index: n.index, label: tr(n.label, lang), href: n.href })) satisfies NavItem[],
    meta: { title: tr(content.meta.title, lang), description: tr(content.meta.description, lang) },
  };
}

export type Site = ReturnType<typeof getSite>;
