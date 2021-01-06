import { Component } from '@angular/core';

@Component({
  selector: 'storybook-logo-page2',
  template: ` <div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <div style="display: flex;">
      <a class="hidden-xs hidden-sm" [href]="url">
        <lla-logo
          (clickHandler)="eventHandler($event)"
          [altTag]="altContent"
          [imgPath]="logoDesktopPath"
        ></lla-logo>
      </a>
      <a class="visible-sm visible-xs hidden-md" [href]="url">
        <lla-logo
          (clickHandler)="eventHandler($event)"
          [altTag]="altContent"
          [imgPath]="logoMobilePath"
        ></lla-logo>
      </a>
    </div>
  </div>`,
  styleUrls: ['./logoPage.scss'],
})
/**
 * StoryLogoPageComponent
 */
export default class StoryLogoPageComponent {
  backgroundColor = '';
  getTheme = 'VTR';
  url = '';
  altContent = 'logo';
  Link = 'http://google.com';

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
  /**
   * Value emitted from child component
   */
  eventHandler() {
    console.log('test');
    this.url = this.Link;
  }
}
