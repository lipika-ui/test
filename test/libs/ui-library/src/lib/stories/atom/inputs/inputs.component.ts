import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
/**
 * Input component
 */
export class InputsComponent implements OnInit {
  /**
   * Input component
   */
  constructor() {
    // Empty constructor
  }

  active = [];
  getTheme = 'VTR';
  backgroundColor = '';
  TextColor = '';
  status = '';
  size = '';
  styles = '';
  types = '';
  hide = true;
  isdisabled = false;
  iconType = 'iconcopy';
  affixTypes = '$';

  /**
   *
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
}
