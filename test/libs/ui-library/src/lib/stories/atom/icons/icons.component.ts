import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
/**
 * Icons Component
 */
export class IconsComponent implements OnInit {
  fontSize = '';
  iconClass = '';
  backgroundColor = '';
  fontColor = '';
  label = false;
  /**
   * Icons Component Construtor
   */
  constructor() {
    // Empty Constructor
  }
  /**
   * OnInit Function, to store current selected Theme
   */
  ngOnInit(): void {
    // Empty Oninit
  }
}
