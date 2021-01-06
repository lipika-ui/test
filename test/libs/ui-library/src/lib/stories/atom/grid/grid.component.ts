import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'lla-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
/**
 * Grid component ngOnInit
 */
export class GridComponent {
  cols: number;
  gutter: number;
  backgroundColor;

  gridByBreakpoint = {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 8,
    sml: 12,
    xs: 4,
  };
  gutterSize = {
    sm: 16,
    lg: 24,
  };
  /**
   * Alerts component constructor
   */
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
            this.gutter = this.gutterSize.sm;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
            this.gutter = this.gutterSize.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
            this.gutter = this.gutterSize.lg;
          }
          if (result.breakpoints[Breakpoints.HandsetLandscape]) {
            this.cols = this.gridByBreakpoint.sml;
            this.gutter = this.gutterSize.lg;
          }
        }
      });
  }
}
