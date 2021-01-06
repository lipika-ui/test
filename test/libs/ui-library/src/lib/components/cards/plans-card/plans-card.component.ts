import { Component, Input } from '@angular/core';
import type { PLANS_CARD } from '../../../interfaces/plans-card';

@Component({
  selector: 'lla-plans-card',
  templateUrl: './plans-card.component.html',
  styleUrls: ['./plans-card.component.scss'],
})
export class PlansCardComponent {
  @Input() cardData: PLANS_CARD;
  @Input() isbordered?: boolean = false;
  @Input() isdarkTheme?: boolean = false;
}
