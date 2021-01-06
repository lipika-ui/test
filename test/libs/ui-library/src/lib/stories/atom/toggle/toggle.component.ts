import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
/**
 * Toggle component
 */
export class ToggleComponent implements OnInit {
  isChecked = false;
  backgroundColor = false;
  isprimary = false;
  iserror = false;
  /**
   *Toggle component constructor
   */
  constructor() {
    // Empty Constructor
  }
  /**
   * Toggle component oninit
   */
  ngOnInit(): void {
    // Empty function
  }
}
