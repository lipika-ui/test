import { Component, Input } from '@angular/core';
import type { WIDE_CARD } from '../../../interfaces/wide-card';

@Component({
  selector: 'lla-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss'],
})
export class WideCardComponent {
  @Input() cardData: WIDE_CARD;
  @Input() isdarkTheme?: boolean = false;
}
