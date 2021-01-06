import { Component, Input } from '@angular/core';
import type { CENTERED_CARD } from '../../../interfaces/centered-card';

@Component({
  selector: 'lla-centered-card',
  templateUrl: './centered-card.component.html',
  styleUrls: ['./centered-card.component.scss'],
})
export class CenteredCardComponent {
  @Input() cardData: CENTERED_CARD;
  @Input() isbordered?: boolean = false;
  @Input() isdarkTheme?: boolean = false;
}
