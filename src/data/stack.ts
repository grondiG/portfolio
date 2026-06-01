import { type Lang, type L10n, tr } from '@/i18n/config';

/**
 * Technical stack, grouped. `ticker` is the condensed headline list for the
 * marquee; `getCategories(lang)` is the full reference grid with localised
 * group labels (tool names are locale-independent).
 */

export interface StackCategory {
  readonly index: string;
  readonly label: string;
  readonly items: readonly string[];
}

interface StackCategoryRaw extends Omit<StackCategory, 'label'> {
  readonly label: L10n;
}

const categoriesRaw: readonly StackCategoryRaw[] = [
  {
    index: '01',
    label: { en: 'Frontend', pl: 'Frontend' },
    items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'SCSS', 'Ionic', 'Angular Material'],
  },
  {
    index: '02',
    label: { en: 'Backend', pl: 'Backend' },
    items: ['Node.js', 'Express', '.NET', 'REST APIs', 'JWT'],
  },
  {
    index: '03',
    label: { en: 'Cloud & DevOps', pl: 'Chmura i DevOps' },
    items: [
      'AWS Lambda',
      'AWS S3',
      'DynamoDB',
      'CloudFront',
      'Azure AD',
      'Azure DevOps',
      'CI/CD',
      'Firebase',
      'Google Cloud',
    ],
  },
  {
    index: '04',
    label: { en: 'Databases', pl: 'Bazy danych' },
    items: ['MySQL', 'DynamoDB'],
  },
  {
    index: '05',
    label: { en: 'CMS & E-commerce', pl: 'CMS i E-commerce' },
    items: ['Strapi', 'WordPress', 'WooCommerce', 'Gatsby', 'Stripe', 'Fakturownia'],
  },
  {
    index: '06',
    label: { en: 'Tools', pl: 'Narzędzia' },
    items: ['Git', 'Jira', 'SEO', 'Google Analytics', 'Google Ads'],
  },
];

export function getCategories(lang: Lang): readonly StackCategory[] {
  return categoriesRaw.map((c) => ({ index: c.index, items: c.items, label: tr(c.label, lang) }));
}

export const STACK_TOOLS_TOTAL = categoriesRaw.reduce((n, c) => n + c.items.length, 0);
export const STACK_GROUPS_TOTAL = categoriesRaw.length;

export const ticker: readonly string[] = [
  'Angular',
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'AWS',
  'DynamoDB',
  'CloudFront',
  'Azure',
  'Ionic',
  'SCSS',
  'Strapi',
  'WordPress',
  'Stripe',
  'Gatsby',
  'REST',
  'JWT',
  'CI/CD',
  'SEO',
] as const;
