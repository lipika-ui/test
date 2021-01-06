import type { CUSTOM_CARD } from './custom-card';

export interface WIDE_CARD extends CUSTOM_CARD {
  tagline?: string;
  placeholder?: string;
  caption?: string;
  body?: string;
  btnText?: string;
  contentRight?: boolean;
  darkTheme?: boolean;
}
