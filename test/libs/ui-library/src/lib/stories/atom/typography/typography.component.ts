import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
/**
 * Typography component
 */
export class TypographyComponent implements OnInit {
  textAlignment = 'left';
  isbody = false;
  isheading = false;
  issubline = false;
  istextcombinations = false;
  isbigsizes = false;
  isbutton = false;
  backgroundColor = '#fff';
  TextColor = '#000';
  colorVariant = '';
  /**
   * Typography constructor
   */
  constructor() {
    // Empty constructor
  }
  /**
   * Typography component oninit
   */
  ngOnInit(): void {
    // Empty function
  }
}
