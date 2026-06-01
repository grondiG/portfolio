/**
 * A tiny, dependency-free icon set. Each glyph is hand-picked to match the
 * brutalist voice: square stroke terminals, miter joins, no rounded softness.
 * Rendered by `src/components/Icon.astro`.
 */

export type IconName =
  | 'arrow-up-right'
  | 'arrow-down'
  | 'arrow-right'
  | 'plus'
  | 'asterisk'
  | 'dot'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'github'
  | 'linkedin';

interface IconDef {
  readonly viewBox: string;
  /** `stroke` glyphs inherit currentColor as stroke; `fill` glyphs as fill. */
  readonly mode: 'stroke' | 'fill';
  readonly body: string;
}

export const ICONS: Record<IconName, IconDef> = {
  'arrow-up-right': {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>',
  },
  'arrow-down': {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<line x1="12" y1="4" x2="12" y2="20"/><polyline points="6 14 12 20 18 14"/>',
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/>',
  },
  plus: {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>',
  },
  asterisk: {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<line x1="12" y1="4" x2="12" y2="20"/><line x1="5.07" y1="8" x2="18.93" y2="16"/><line x1="5.07" y1="16" x2="18.93" y2="8"/>',
  },
  dot: {
    viewBox: '0 0 24 24',
    mode: 'fill',
    body: '<circle cx="12" cy="12" r="5"/>',
  },
  mail: {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<rect x="3" y="5" width="18" height="14"/><polyline points="3 6.5 12 13 21 6.5"/>',
  },
  phone: {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<path d="M5 3h4l2 5-2.4 1.5a12 12 0 0 0 5.9 5.9L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  },
  pin: {
    viewBox: '0 0 24 24',
    mode: 'stroke',
    body: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  },
  github: {
    viewBox: '0 0 24 24',
    mode: 'fill',
    body: '<path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.3-5.47-5.8 0-1.28.47-2.33 1.24-3.15-.13-.3-.54-1.5.11-3.14 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.29-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z"/>',
  },
  linkedin: {
    viewBox: '0 0 24 24',
    mode: 'fill',
    body: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/>',
  },
};
