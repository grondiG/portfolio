import { type Lang, type L10n, tr } from '@/i18n/config';

/**
 * Projects collection.
 * ------------------------------------------------------------------
 * `thumbnailPlaceholder` is the EXACT path a full-page Playwright capture
 * will be written to (see `scripts/capture.mjs`). Until it exists,
 * `ProjectCard.astro` renders a designed "awaiting capture" plate.
 *
 * Translatable fields use `L10n`; `getProjects(lang)` resolves them. URLs,
 * tech, ids and indices are locale-independent.
 *
 * NOTE: per-project `stack` is a representative starting point — adjust to taste.
 */

export type ProjectStatus = 'production' | 'maintenance' | 'wip';

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
  readonly primary?: boolean;
}

/** Resolved project (what components consume). */
export interface Project {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly status: ProjectStatus;
  readonly statusLabel: string;
  readonly year: string;
  /** Plain-language business outcome — the line a prospective client cares about. */
  readonly benefit: string;
  readonly summary: string;
  readonly scope: readonly string[];
  readonly stack: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly thumbnailPlaceholder: `/images/screenshots/${string}.png`;
  readonly captureUrl: string;
}

interface ProjectRaw extends Omit<Project, 'statusLabel' | 'year' | 'benefit' | 'summary' | 'scope'> {
  readonly statusLabel: L10n;
  readonly year: L10n;
  readonly benefit: L10n;
  readonly summary: L10n;
  readonly scope: L10n<readonly string[]>;
}

export const STATUS_META: Record<ProjectStatus, { tone: 'live' | 'support' | 'building' }> = {
  production: { tone: 'live' },
  maintenance: { tone: 'support' },
  wip: { tone: 'building' },
};

const PRODUCTION: L10n = { en: 'Production', pl: 'Produkcja' };

const projectsRaw: readonly ProjectRaw[] = [
  {
    id: 'expo-aluminium',
    index: '01',
    title: 'Expo Aluminium',
    status: 'production',
    statusLabel: PRODUCTION,
    year: { en: '2024', pl: '2024' },
    benefit: {
      en: 'A professional online store that handles and brings in orders from across Poland and Germany.',
      pl: 'Profesjonalny sklep e-commerce, obsługujący i generujący zamówienia z całej Polski i Niemiec.',
    },
    summary: {
      en: 'End-to-end build for an aluminium fabrication brand — from stack selection through implementation to a performance pass on Core Web Vitals.',
      pl: 'Kompleksowa realizacja strony dla producenta wyrobów z aluminium — od doboru technologii, przez wdrożenie, po optymalizację Core Web Vitals.',
    },
    scope: {
      en: ['End-to-end delivery', 'Stack selection', 'Performance optimization'],
      pl: ['Kompleksowa realizacja', 'Dobór technologii', 'Optymalizacja wydajności'],
    },
    stack: ['Next.js', 'React', 'SEO', 'Core Web Vitals'],
    links: [{ label: 'expo-aluminium.pl', url: 'https://expo-aluminium.pl/', primary: true }],
    thumbnailPlaceholder: '/images/screenshots/expo-aluminium.png',
    captureUrl: 'https://expo-aluminium.pl/',
  },
  {
    id: 'euro-pflasterarbeiten',
    index: '02',
    title: 'Euro Pflasterarbeiten',
    status: 'production',
    statusLabel: PRODUCTION,
    year: { en: '2024', pl: '2024' },
    benefit: {
      en: 'A professional online presence that builds trust and brings in local jobs.',
      pl: 'Profesjonalna obecność w sieci, która buduje zaufanie i przynosi lokalne zlecenia.',
    },
    summary: {
      en: 'Marketing site for a German paving contractor. Translated client requirements into an implementation and executed the on-page SEO.',
      pl: 'Strona marketingowa dla niemieckiej firmy brukarskiej. Przełożyłem wymagania klienta na wdrożenie i zrealizowałem SEO on-page.',
    },
    scope: {
      en: ['Implementation', 'Client requirements', 'SEO execution'],
      pl: ['Wdrożenie', 'Wymagania klienta', 'Realizacja SEO'],
    },
    stack: ['Frontend', 'CMS', 'SEO'],
    links: [{ label: 'euro-pflasterarbeiten.de', url: 'https://euro-pflasterarbeiten.de/', primary: true }],
    thumbnailPlaceholder: '/images/screenshots/euro-pflasterarbeiten.png',
    captureUrl: 'https://euro-pflasterarbeiten.de/',
  },
  {
    id: 'luxmeria',
    index: '03',
    title: 'Luxmeria',
    status: 'maintenance',
    statusLabel: { en: 'Maintenance & Support', pl: 'Utrzymanie i wsparcie' },
    year: { en: '2023 — present', pl: '2023 — obecnie' },
    benefit: {
      en: 'Ongoing care that keeps the site fast and online, so downtime never costs a sale.',
      pl: 'Stała opieka, dzięki której strona jest szybka i dostępna, więc żadna sprzedaż nie przepada przez przestój.',
    },
    summary: {
      en: 'Ongoing technical custody of a live site — proactive performance monitoring, dependency upkeep, and iterative updates.',
      pl: 'Bieżąca opieka techniczna nad działającą stroną — proaktywny monitoring wydajności, utrzymanie zależności i iteracyjne aktualizacje.',
    },
    scope: {
      en: ['Ongoing maintenance', 'Performance monitoring', 'Updates'],
      pl: ['Stałe utrzymanie', 'Monitoring wydajności', 'Aktualizacje'],
    },
    stack: ['WordPress', 'Performance', 'Monitoring'],
    links: [{ label: 'luxmeria.pl', url: 'https://luxmeria.pl/', primary: true }],
    thumbnailPlaceholder: '/images/screenshots/luxmeria.png',
    captureUrl: 'https://luxmeria.pl/',
  },
  {
    id: 'hot-drop',
    index: '04',
    title: 'Hot-Drop',
    status: 'wip',
    statusLabel: { en: 'Work in progress', pl: 'W realizacji' },
    year: { en: '2025', pl: '2025' },
    benefit: {
      en: 'An online store that sells around the clock and grows with demand.',
      pl: 'Sklep internetowy, który sprzedaje przez całą dobę i rośnie wraz z popytem.',
    },
    summary: {
      en: 'Full-stack TCG e-commerce store on a serverless footprint — interactive product modules with scaling handled by AWS Lambda. Actively in development.',
      pl: 'Full-stackowy sklep e-commerce z kartami TCG w architekturze serverless — interaktywne moduły produktowe ze skalowaniem opartym o AWS Lambda. W aktywnym rozwoju.',
    },
    scope: {
      en: ['Full-stack development', 'Serverless scaling', 'Interactive modules'],
      pl: ['Rozwój full-stack', 'Skalowanie serverless', 'Interaktywne moduły'],
    },
    stack: ['React', 'AWS Lambda', 'DynamoDB', 'Amplify'],
    links: [{ label: 'hot-drop.pl', url: 'https://hot-drop.pl/', primary: true }],
    thumbnailPlaceholder: '/images/screenshots/hot-drop.png',
    captureUrl: 'https://hot-drop.pl/',
  },
];

export function getProjects(lang: Lang): readonly Project[] {
  return projectsRaw.map((p) => ({
    ...p,
    statusLabel: tr(p.statusLabel, lang),
    year: tr(p.year, lang),
    benefit: tr(p.benefit, lang),
    summary: tr(p.summary, lang),
    scope: tr(p.scope, lang),
  }));
}

/** Count is locale-independent; handy for the hero. */
export const PROJECT_COUNT = projectsRaw.length;
