import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
/**
 * Color component
 */
export class ColorsComponent implements OnInit {
  /**
   * Color component constructor
   */
  constructor() {
    // Empty constructor
  }
  /**
   * Input Parameters
   */
  textAlignment = 'left';
  opacity = [
    'C50',
    'C100',
    'C200',
    'C300',
    'C400',
    'C500',
    'C600',
    'C700',
    'C800',
    'C900',
  ];
  transparency = ['OP8', 'OP16', 'OP24', 'OP32', 'OP40', 'OP48'];
  btnCategory: 'primary';
  getTheme = 'VTR';
  bgcolorVTRPrimary = ['pink'];
  bgcolorVTRSecondary = ['blue', 'violent', 'lightBlue', 'paleCyan'];
  bgcolorVTRTeritary = ['green', 'paleBlue', 'orange', 'red'];
  bgcolorFlowPrimary = ['blue'];
  bgcolorFlowSecondary = ['green', 'violent'];
  bgcolorFlowTeritary = ['red', 'orange'];
  bgcolorNeutral = ['grey'];
  backgroundColor = '';
  TextColor = '';
  /**
   * OnInit Function, to store current selected Theme
   */
  ngOnInit(): void {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
}
