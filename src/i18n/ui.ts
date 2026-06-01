import type { Lang } from '@/i18n/config';

/**
 * UI / chrome strings. Content (projects, experience, …) is localised in the
 * data modules; this covers labels, section headings and micro-copy.
 *
 * Polish note: the few pluralised strings are written for the actual fixed
 * counts in this CV (4 projects, 6 groups, 34 tools), so they read correctly.
 */
const en = {
  skip: 'Skip to content',
  langSwitchLabel: 'Język / Language',

  header: {
    available: 'Available',
    booked: 'Booked',
    contact: 'Contact',
    menuOpen: 'Index',
    menuClose: 'Close',
  },

  hero: {
    profile: 'Profile',
    selectedWork: 'Selected work',
    getInTouch: 'Get in touch',
    projectsLive: (n: string) => `${n} projects live`,
    scroll: 'Scroll',
  },

  about: {
    kicker: 'Profile',
    title: 'The short version',
    note: 'Wrocław · PL',
    facts: {
      discipline: 'Discipline',
      located: 'Located',
      experience: 'Experience',
      core: 'Core',
      availability: 'Availability',
      studying: 'Studying',
    },
    disciplineValue: 'Full-Stack Development',
    experienceValue: (y: string) => `~${y} yrs commercial`,
  },

  stack: {
    kicker: 'Capabilities',
    title: 'Technical stack',
    note: (tools: number, groups: number) => `${tools} tools / ${groups} groups`,
  },

  work: {
    kicker: 'Selected work',
    title: 'Live projects',
    note: (n: string) => `${n} shipped`,
    lead: 'A working sample — every entry below is a public, live URL. Hover a plate to let the full-page capture scroll.',
    awaitingCapture: 'Awaiting capture',
    capturedWith: 'Full-page · Playwright',
    role: 'Role',
    builtWith: 'Built with',
  },

  services: {
    kicker: 'What I do',
    title: 'Services',
    note: 'Freelance · Remote',
    lead: 'I design and build websites and online stores for small and medium businesses, with one goal: more customers. You get a clear scope and a fixed price up front, plus support once the site is live.',
    offerings: ['Business websites', 'Online stores', 'Web apps', 'Care & maintenance'],
    stepsKicker: 'How it works',
    steps: [
      {
        title: 'Call & quote',
        body: 'We talk through what your business needs. You get a clear scope and a fixed price before any work starts.',
      },
      {
        title: 'Design & build',
        body: 'I design and build the site and keep you in the loop. You see it take shape and give feedback along the way.',
      },
      {
        title: 'Launch & support',
        body: 'We launch, and I keep helping you with the site and any questions that come up.',
      },
    ],
  },

  cta: {
    stripText: 'Want results like these for your business?',
    stripButton: 'Get a quote',
    contactPrompt: 'Need a website? Get a quote in 24 hours.',
    contactButton: 'Get a quote',
    mailSubject: 'Website enquiry',
    responseNote: 'I reply to most messages within 24 hours.',
  },

  testimonials: {
    kicker: 'Client reviews',
    title: 'What clients say',
  },

  experience: {
    kicker: 'Trajectory',
    title: 'Experience',
    note: '2022 — present',
    current: 'Current',
    kinds: { freelance: 'Freelance', employment: 'Employment', internship: 'Internship' },
  },

  education: {
    head: 'Education / Background',
  },

  contact: {
    kicker: 'Contact',
    titleLines: ['Let’s work', 'together'],
    direct: 'Direct',
    basedIn: 'Based in',
    status: 'Status',
    elsewhere: 'Elsewhere',
  },

  footer: {
    builtWith: 'Built with Astro + Tailwind',
    setIn: 'Set in Archivo Expanded, Hanken Grotesk & Martian Mono',
    noTrackers: 'No cookies · No trackers',
    backToTop: 'Back to top',
  },
};

const pl: typeof en = {
  skip: 'Przejdź do treści',
  langSwitchLabel: 'Język / Language',

  header: {
    available: 'Dostępny',
    booked: 'Zajęty',
    contact: 'Kontakt',
    menuOpen: 'Indeks',
    menuClose: 'Zamknij',
  },

  hero: {
    profile: 'Profil',
    selectedWork: 'Wybrane projekty',
    getInTouch: 'Napisz do mnie',
    projectsLive: (n: string) => `${n} projekty online`,
    scroll: 'Przewiń',
  },

  about: {
    kicker: 'Profil',
    title: 'W skrócie',
    note: 'Wrocław · PL',
    facts: {
      discipline: 'Specjalizacja',
      located: 'Lokalizacja',
      experience: 'Doświadczenie',
      core: 'Główne',
      availability: 'Dostępność',
      studying: 'Studia',
    },
    disciplineValue: 'Full-Stack Development',
    experienceValue: (y: string) => `~${y} lata komercyjnie`,
  },

  stack: {
    kicker: 'Kompetencje',
    title: 'Technologie',
    note: (tools: number, groups: number) => `${tools} narzędzi / ${groups} grup`,
  },

  work: {
    kicker: 'Wybrane projekty',
    title: 'Realizacje',
    note: (n: string) => `${n} wdrożone`,
    lead: 'Wybrane realizacje — każdy projekt poniżej jest publicznie dostępny online. Najedź na kadr, aby przewinąć pełny zrzut strony.',
    awaitingCapture: 'Oczekiwanie na zrzut',
    capturedWith: 'Pełna strona · Playwright',
    role: 'Rola',
    builtWith: 'Technologie',
  },

  services: {
    kicker: 'Co robię',
    title: 'Usługi',
    note: 'Freelance · Zdalnie',
    lead: 'Projektuję i buduję strony oraz sklepy internetowe dla małych i średnich firm. Cel jest prosty: więcej klientów. Dostajesz jasny zakres i stałą cenę z góry, a po wdrożeniu zapewniam opiekę techniczną.',
    offerings: ['Strony firmowe', 'Sklepy internetowe', 'Aplikacje webowe', 'Opieka i utrzymanie'],
    stepsKicker: 'Jak to działa',
    steps: [
      {
        title: 'Rozmowa i wycena',
        body: 'Rozmawiamy o tym, czego potrzebuje Twoja firma. Dostajesz jasny zakres i stałą cenę, bez późniejszych niespodzianek.',
      },
      {
        title: 'Projekt i realizacja',
        body: 'Projektuję i buduję stronę, a o postępach informuję Cię na bieżąco. Widzisz, jak powstaje, i zgłaszasz uwagi po drodze.',
      },
      {
        title: 'Wdrożenie i wsparcie',
        body: 'Publikujemy stronę, a ja dbam o jej poprawne działanie i odpowiadam na Twoje pytania.',
      },
    ],
  },

  cta: {
    stripText: 'Chcesz takich efektów dla swojej firmy?',
    stripButton: 'Zapytaj o wycenę',
    contactPrompt: 'Potrzebujesz strony? Wycena w 24 godziny.',
    contactButton: 'Zapytaj o wycenę',
    mailSubject: 'Zapytanie o stronę',
    responseNote: 'Większość wiadomości odpowiadam w 24 godziny.',
  },

  testimonials: {
    kicker: 'Opinie klientów',
    title: 'Co mówią klienci',
  },

  experience: {
    kicker: 'Ścieżka kariery',
    title: 'Doświadczenie',
    note: '2022 — obecnie',
    current: 'Obecnie',
    kinds: { freelance: 'Freelance', employment: 'Etat', internship: 'Staż' },
  },

  education: {
    head: 'Edukacja / Wykształcenie',
  },

  contact: {
    kicker: 'Kontakt',
    titleLines: ['Zróbmy', 'coś razem'],
    direct: 'Telefon',
    basedIn: 'Lokalizacja',
    status: 'Status',
    elsewhere: 'Social Media',
  },

  footer: {
    builtWith: 'Zbudowane w Astro + Tailwind',
    setIn: 'Strona złożona fontami Archivo Expanded, Hanken Grotesk i Martian Mono',
    noTrackers: 'Bez ciasteczek · Bez śledzenia',
    backToTop: 'Do góry',
  },
};

export const UI = { en, pl } satisfies Record<Lang, typeof en>;

export const useTranslations = (lang: Lang) => UI[lang];
export type UIStrings = typeof en;
