import { Component } from '@angular/core';

@Component({
  selector: 'storybook-logo',
  template: ` <div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div class="hidden-xs hidden-sm">
      <lla-logo
        (clickHandler)="eventHandler($event)"
        [altTag]="altContent"
        [imgPath]="logoDesktopPath"
      ></lla-logo>
    </div>
    <div class="visible-sm visible-xs hidden-md">
      <lla-logo
        (clickHandler)="eventHandler($event)"
        [altTag]="altContent"
        [imgPath]="logoMobilePath"
      ></lla-logo>
    </div>
  </div>`,
  styleUrls: ['./logo.scss'],
})
/**
 * StoryLogoComponent
 */
export default class StoryLogoComponent {
  backgroundColor = '';
  getTheme = 'VTR';
  altContent = 'logo';
  VTRDesktopLogo = '/vtr/logo/logo-desktop.svg';
  VTRMobileLogo = '/vtr/logo/logo-mobile.svg';
  FlowDesktopLogo = '/flow/logo/logo-desktop.svg';
  FlowMobileLogo = '/flow/logo/logo-mobile.svg';

  logoDesktopPath = this.VTRDesktopLogo;
  logoMobilePath = this.VTRMobileLogo;

  /**
   * StoryLogoComponent
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
      if (this.getTheme == 'Flow') {
        this.logoDesktopPath = this.FlowDesktopLogo;
        this.logoMobilePath = this.FlowMobileLogo;
      }
      if (this.getTheme == 'VTR') {
        this.logoDesktopPath = this.VTRDesktopLogo;
        this.logoMobilePath = this.VTRMobileLogo;
      }
    });
  }
}
