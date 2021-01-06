import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
/**
 * Buttons component ngOnInit
 */
export class ButtonsComponent implements OnInit {
  extraClass = '';
  text = '';
  backgroundColor = '';
  isdisabled = false;
  isSecondary;
  isPrimary;
  isLink;
  ghostText = false;
  bgcolor = 'white';
  noExist = false;
  TextColor = '';

  /**
   * Buttons component ngOnInit
   */
  ngOnInit(): void {
    // Empty ngOnInit
  }
}
