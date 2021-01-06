import { Component } from '@angular/core';

@Component({
  selector: 'storybook-breadcrumb',
  template: `<article
    class="template-fluid"
    [ngStyle]="{
      'background-color': backgroundColor
    }"
  >
    <lla-breadcrumb
      (clickHandler)="navigatePage($event)"
      [breadCrumb]="breadCrumb"
      [isDarkMode]="isDarkMode"
    ></lla-breadcrumb>
  </article>`,
  styleUrls: ['./breadcrumb.scss'],
})
/**
 * StoryinputCodeComponent
 */
export default class StorybreadCrumbComponent {
  getTheme = 'VTR';
  /**
   * To get the current theme from storybook
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
  /**
   *
   * @param data
   */
  navigatePage(data) {
    console.log(data);
  }
}
