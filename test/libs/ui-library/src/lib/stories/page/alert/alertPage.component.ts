import { Component } from '@angular/core';

@Component({
  selector: 'storybook-alert-page',
  template: ` <div
    class="template-fluid"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <button
      mat-raised-button
      class="button--primary btn-small"
      (click)="toggleAlert()"
    >
      click
    </button>
    <lla-alert
      *ngIf="alertToggle"
      (clickHandler)="toggleAlert()"
      [type]="size"
      [opacity]="opacity"
      [status]="status"
      [title]="title"
      [body]="body"
    ></lla-alert>
  </div>`,
  styleUrls: ['./alertPage.scss'],
})
/**
 * StoryLogoPageComponent
 */
export default class StoryalertPageComponent {
  backgroundColor = '';
  getTheme = 'VTR';
  status = '';
  title = 'Success';
  body = '';
  alertToggle = false;
  size = 'default';
  /**
   * Toggle alert
   */
  toggleAlert(): void {
    this.alertToggle = !this.alertToggle;
  }
  /**
   * StoryLogoComponent
   */
  ngOnInit() {
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
    });
  }
}
