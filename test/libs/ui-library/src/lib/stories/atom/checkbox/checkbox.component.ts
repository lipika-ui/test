import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
/**
 * Checkbox component
 */
export class CheckboxComponent implements OnInit {
  isChecked = false;
  disabled = false;
  backgroundColor;
  isprimary;
  isgroup;
  iserror;
  label;
  caption;
  values;
  Arr = Array;
  /**
   * Alerts component ngOnInit
   */
  ngOnInit(): void {
    // Empty ngOnInit
  }
}
