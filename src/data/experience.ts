import { type Lang, type L10n, tr } from '@/i18n/config';

/**
 * Professional history, newest first. Roles overlap (freelance ran alongside
 * employment) — the period strings preserve that honestly. Months are localised
 * (Polish abbreviations + "obecnie" for "Present").
 */

export type RoleKind = 'freelance' | 'employment' | 'internship';

export interface Role {
  readonly index: string;
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly kind: RoleKind;
  readonly period: { readonly start: string; readonly end: string; readonly current?: boolean };
  readonly summary: readonly string[];
  readonly stack: readonly string[];
}

interface RoleRaw extends Omit<Role, 'title' | 'company' | 'location' | 'period' | 'summary'> {
  readonly title: L10n;
  readonly company: L10n;
  readonly location: L10n;
  readonly period: { readonly start: L10n; readonly end: L10n; readonly current?: boolean };
  readonly summary: L10n<readonly string[]>;
}

const experienceRaw: readonly RoleRaw[] = [
  {
    index: '01',
    title: { en: 'Freelance Web Developer', pl: 'Web Developer (freelance)' },
    company: { en: 'Independent', pl: 'Niezależnie' },
    location: { en: 'Wrocław · Remote', pl: 'Wrocław · Zdalnie' },
    kind: 'freelance',
    period: { start: { en: 'Jan 2025', pl: 'sty 2025' }, end: { en: 'Present', pl: 'obecnie' }, current: true },
    summary: {
      en: [
        'Deliver client projects from business and company websites to e-commerce stores and small web applications.',
        'Select the stack per project — React / Next.js, Angular, WordPress / CMS, Node.js.',
        'Own the full cycle: requirements, implementation, SEO / performance, and maintenance.',
      ],
      pl: [
        'Realizuję projekty klientów — od stron firmowych po sklepy e-commerce i niewielkie aplikacje webowe.',
        'Dobieram technologie pod projekt — React / Next.js, Angular, WordPress / CMS, Node.js.',
        'Prowadzę pełny cykl: wymagania, wdrożenie, SEO / wydajność i utrzymanie.',
      ],
    },
    stack: ['React', 'Next.js', 'Angular', 'Node.js', 'WordPress', 'SEO'],
  },
  {
    index: '02',
    title: { en: 'Software Engineer (Angular)', pl: 'Inżynier oprogramowania (Angular)' },
    company: { en: 'Lambda Factor sp. z o.o.', pl: 'Lambda Factor sp. z o.o.' },
    location: { en: 'Wrocław, Poland', pl: 'Wrocław, Polska' },
    kind: 'employment',
    period: { start: { en: 'Oct 2022', pl: 'paź 2022' }, end: { en: 'Dec 2024', pl: 'gru 2024' } },
    summary: {
      en: [
        'Developed web applications in Angular across internal company projects.',
        'Built and maintained static websites with CMS integrations.',
        'Authored technical documentation.',
      ],
      pl: [
        'Tworzyłem aplikacje webowe w Angularze w ramach wewnętrznych projektów firmy.',
        'Budowałem i utrzymywałem strony statyczne z integracjami CMS.',
        'Przygotowywałem dokumentację techniczną.',
      ],
    },
    stack: ['Angular', 'TypeScript', 'SCSS', 'CMS'],
  },
  {
    index: '03',
    title: { en: 'Freelance Full-Stack Developer', pl: 'Full-Stack Developer (freelance)' },
    company: { en: 'Expo · Sebastian Czernik', pl: 'Expo · Sebastian Czernik' },
    location: { en: 'Remote', pl: 'Zdalnie' },
    kind: 'freelance',
    period: { start: { en: 'Oct 2023', pl: 'paź 2023' }, end: { en: 'Dec 2024', pl: 'gru 2024' } },
    summary: {
      en: [
        'Built an e-commerce store in Gatsby / React on a serverless architecture (AWS Lambda, S3, DynamoDB).',
        'Integrated Stripe and Fakturownia payments, built an admin panel, and deployed a global CDN via CloudFront.',
        'Handled SEO optimization and Google Analytics / Ads configuration.',
      ],
      pl: [
        'Zbudowałem sklep e-commerce w Gatsby / React w architekturze serverless (AWS Lambda, S3, DynamoDB).',
        'Zintegrowałem płatności Stripe i Fakturownię, stworzyłem panel administracyjny i wdrożyłem globalny CDN przez CloudFront.',
        'Zająłem się optymalizacją SEO oraz konfiguracją Google Analytics / Ads.',
      ],
    },
    stack: ['Gatsby', 'React', 'AWS Lambda', 'DynamoDB', 'Stripe', 'CloudFront'],
  },
  {
    index: '04',
    title: { en: 'Full-Stack Developer Intern', pl: 'Stażysta — Full-Stack Developer' },
    company: { en: 'Kontabile · Erasmus+', pl: 'Kontabile · Erasmus+' },
    location: { en: 'Coimbra, Portugal', pl: 'Coimbra, Portugalia' },
    kind: 'internship',
    period: { start: { en: 'Jul 2024', pl: 'lip 2024' }, end: { en: 'Aug 2024', pl: 'sie 2024' } },
    summary: {
      en: [
        'Built WordPress sites from custom templates to WooCommerce stores using Elementor.',
        'Developed a document-management application: Angular + Node.js / Express + AWS S3.',
      ],
      pl: [
        'Tworzyłem strony WordPress — od własnych szablonów po sklepy WooCommerce — z użyciem Elementora.',
        'Rozwijałem aplikację do zarządzania dokumentami: Angular + Node.js / Express + AWS S3.',
      ],
    },
    stack: ['WordPress', 'WooCommerce', 'Angular', 'Node.js', 'AWS S3'],
  },
  {
    index: '05',
    title: { en: 'Angular Frontend Developer', pl: 'Frontend Developer (Angular)' },
    company: { en: 'Vality sp. z o.o.', pl: 'Vality sp. z o.o.' },
    location: { en: 'Wrocław, Poland', pl: 'Wrocław, Polska' },
    kind: 'employment',
    period: { start: { en: 'Jun 2023', pl: 'cze 2023' }, end: { en: 'Sep 2023', pl: 'wrz 2023' } },
    summary: {
      en: [
        'Built and optimized Angular applications — components, lazy-loading, Angular Material.',
        'Integrated a .NET backend, Azure AD, JWT, and CI/CD pipelines in Azure DevOps.',
        'Developed a mobile frontend in Ionic / Angular, sharing core logic with the web app.',
      ],
      pl: [
        'Budowałem i optymalizowałem aplikacje w Angularze — komponenty, lazy-loading, Angular Material.',
        'Integrowałem backend .NET, Azure AD, JWT oraz pipeline’y CI/CD w Azure DevOps.',
        'Stworzyłem frontend mobilny w Ionic / Angular, współdzieląc logikę z aplikacją webową.',
      ],
    },
    stack: ['Angular', 'Angular Material', 'Ionic', 'Azure AD', '.NET', 'CI/CD'],
  },
];

export function getExperience(lang: Lang): readonly Role[] {
  return experienceRaw.map((r) => ({
    index: r.index,
    kind: r.kind,
    stack: r.stack,
    title: tr(r.title, lang),
    company: tr(r.company, lang),
    location: tr(r.location, lang),
    period: { start: tr(r.period.start, lang), end: tr(r.period.end, lang), current: r.period.current },
    summary: tr(r.summary, lang),
  }));
}
