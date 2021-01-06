import { Component, Input } from '@angular/core';
import type { CTA_CARD } from '../../../interfaces/cta-card';

@Component({
  selector: 'lla-cta-card',
  templateUrl: './cta-card.component.html',
  styleUrls: ['./cta-card.component.scss'],
})
export class CtaCardComponent {
  @Input() cardData: CTA_CARD;
  @Input() isbordered?: boolean = false;
  @Input() isdarkTheme?: boolean = false;
}
