import type { CUSTOM_CARD } from './custom-card';

export interface CTA_CARD extends CUSTOM_CARD {
  placeholder?: string;
  caption?: string;
  btnText?: string;
  bordered?: boolean;
  darkTheme?: boolean;
}
