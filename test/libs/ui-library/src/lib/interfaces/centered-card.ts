import type { CUSTOM_CARD } from './custom-card';

export interface CENTERED_CARD extends CUSTOM_CARD {
  tagline?: string;
  bordered?: boolean;
  darkTheme?: boolean;
}
