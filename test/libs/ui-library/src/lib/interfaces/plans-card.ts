import type { CUSTOM_CARD } from './custom-card';

export interface PLANS_CARD extends CUSTOM_CARD {
  planContent: Array<any>;
  icon?: string;
  currency?: string;
  btnText?: string;
  priceTerms?: string;
  subPriceTerms?: string;
  normalPrice?: number;
}
