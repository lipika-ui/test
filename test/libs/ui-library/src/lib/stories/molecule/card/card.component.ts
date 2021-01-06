import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'storybook-cards',
  template: `<div
    [ngClass]="[gridSize ? gridSize : '']"
    [ngStyle]="{
      'background-color': backgroundColor
    }"
  >
    <lla-centered-card
      *ngIf="centeredCard"
      [cardData]="cardData"
      [isbordered]="isbordered"
      [isdarkTheme]="isdarkTheme"
    ></lla-centered-card>
    <lla-cta-card
      *ngIf="ctaCard"
      [cardData]="cardData"
      [isbordered]="isbordered"
      [isdarkTheme]="isdarkTheme"
    ></lla-cta-card>
    <lla-fullsize-card
      *ngIf="fullsizeCard"
      [cardData]="cardData"
      [cardVariant]="cardVariant"
    ></lla-fullsize-card>
    <lla-plans-card *ngIf="plansCard" [cardData]="cardData"></lla-plans-card>
    <lla-wide-card
      *ngIf="wideCard"
      [cardData]="cardData"
      [isdarkTheme]="isdarkTheme"
    ></lla-wide-card>
  </div>`,
  styleUrls: ['./card.scss'],
})
/**
 * StoryinputCodeComponent
 */
export default class StoryCardComponent {
  getTheme = 'VTR';
  gridSize = '';
  isbordered = true;
  isdarkTheme = true;
  cardData = [];
  /**
   * To get the current theme from storybook
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
            this.gridSize = 'XS';
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.gridSize = 'SM';
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.gridSize = 'MD';
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.gridSize = 'LG';
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.gridSize = 'XL';
          }
          if (result.breakpoints[Breakpoints.HandsetLandscape]) {
            this.gridSize = 'SML';
          }
        }
      });
  }
  /**
   * To get the current theme from storybook
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
}
