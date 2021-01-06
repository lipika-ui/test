import { Component, Input, OnInit } from '@angular/core';
import type { FULLSIZE_CARD } from '../../../interfaces/fullsize-card';

type CARD_VARIANT = 'FULLSIZE' | 'FULLSIZECTA' | 'FULLSIZEPRICE';

@Component({
  selector: 'lla-fullsize-card',
  templateUrl: './fullsize-card.component.html',
  styleUrls: ['./fullsize-card.component.scss'],
})
export class FullsizeCardComponent {
  @Input() cardVariant: CARD_VARIANT;
  @Input() cardData: FULLSIZE_CARD;
}
