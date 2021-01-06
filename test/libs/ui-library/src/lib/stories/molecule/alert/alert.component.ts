import { Component } from '@angular/core';

@Component({
  selector: 'storybook-alert',
  template: ` <div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <lla-alert
      (clickHandler)="toggleAlert()"
      [type]="size"
      [opacity]="opacity"
      [status]="status"
      [title]="title"
      [body]="body"
    ></lla-alert>
  </div>`,
  styleUrls: ['./alert.scss'],
})
/**
 * StoryLogoComponent
 */
export default class StoryAlertComponent {
  backgroundColor = '';
  getTheme = 'VTR';
  status = '';
  body = 'test';
  size = '';
  opacity = '';
  title;

  /**
   * StoryLogoComponent
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }

  /**
   * Toggle alert
   */
  toggleAlert() {
    return null;
  }
}
