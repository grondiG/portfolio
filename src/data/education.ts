import { type Lang, type L10n, tr } from '@/i18n/config';

export interface Education {
  readonly index: string;
  readonly program: string;
  readonly institution: string;
  readonly status: string;
  readonly note?: string;
  /** Locale-independent flag — used to surface the in-progress degree. */
  readonly current: boolean;
}

interface EducationRaw extends Omit<Education, 'program' | 'institution' | 'status' | 'note'> {
  readonly program: L10n;
  readonly institution: L10n;
  readonly status: L10n;
  readonly note?: L10n;
}

const educationRaw: readonly EducationRaw[] = [
  {
    index: '01',
    current: true,
    program: { en: 'Business Informatics, BSc', pl: 'Informatyka w biznesie, lic.' },
    institution: {
      en: 'Wrocław University of Economics and Business',
      pl: 'Uniwersytet Ekonomiczny we Wrocławiu',
    },
    status: { en: 'In progress', pl: 'W trakcie' },
  },
  {
    index: '02',
    current: false,
    program: { en: 'IT Technician / Programmer', pl: 'Technik informatyk / Programista' },
    institution: {
      en: 'Elektroniczne Zakłady Naukowe, Wrocław',
      pl: 'Elektroniczne Zakłady Naukowe, Wrocław',
    },
    status: { en: 'Graduated', pl: 'Ukończone' },
    note: { en: 'Apr 2025', pl: 'kwi 2025' },
  },
];

export function getEducation(lang: Lang): readonly Education[] {
  return educationRaw.map((e) => ({
    index: e.index,
    current: e.current,
    program: tr(e.program, lang),
    institution: tr(e.institution, lang),
    status: tr(e.status, lang),
    note: e.note ? tr(e.note, lang) : undefined,
  }));
}
