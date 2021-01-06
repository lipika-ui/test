import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
/**
 * Radio Button component constructor
 */
export class RadiobuttonComponent implements OnInit {
  backgroundColor = '';
  isprimary = false;
  iserror = false;
  isgroup = false;
  label;
  horizontal;
  caption;
  disabled;
  values;
  Arr = Array;
  /**
   * Radio Button component constructor
   */
  isChecked = false;
  /**
   * Radio Button component constructor
   */
  constructor() {
    // Empty constructor
  }
  /**
   * Radio Button component constructor
   */
  ngOnInit(): void {
    // Empty function
  }
}
