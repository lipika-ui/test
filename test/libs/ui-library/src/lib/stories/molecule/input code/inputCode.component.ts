import { Component } from '@angular/core';

@Component({
  selector: 'storybook-inputCode',
  template: `<article
    class="template-fluid"
    [ngStyle]="{
      'background-color': backgroundColor,
      color: TextColor
    }"
  >
    <div
      class="inputCode"
      [ngClass]="[
        status ? (status | lowercase) : '',
        types ? (types | lowercase) : '',
        isDisabled ? 'disabled' : '',
        isReadOnly ? 'readOnly' : ''
      ]"
    >
      <label id="test" class="inputLabel"
        ><strong>Label {{ status == 'REQUIRED' ? '*' : '' }} </strong></label
      ><br />
    </div>
    <lla-input-code
      (sendData)="getData($event)"
      [isDisabled]="isDisabled"
      [isReadOnly]="isReadOnly"
      [status]="status"
      [count]="count"
      [types]="types"
    ></lla-input-code>
    <div
      class="inputCode"
      [ngClass]="[
        status ? (status | lowercase) : '',
        types ? (types | lowercase) : '',
        isDisabled ? 'disabled' : '',
        isReadOnly ? 'readOnly' : ''
      ]"
    >
      <mat-hint *ngIf="status == 'DEFAULT' || isDisabled || isReadOnly"
        >Assistive Text</mat-hint
      >
      <mat-hint *ngIf="status == 'SUCCESS'" class="toaster success-background"
        >Success Text</mat-hint
      >
      <mat-hint *ngIf="status == 'ERROR'" class="toaster error-background"
        >Error Text</mat-hint
      >
      <mat-hint *ngIf="status == 'REQUIRED'">Required*</mat-hint>
    </div>
  </article>`,
  styleUrls: ['./inputCode.scss'],
})
/**
 * StoryinputCodeComponent
 */
export default class StoryinputCodeComponent {
  getTheme = 'VTR';
  backgroundColor = '';
  TextColor = '';
  status = 'default';
  isdisabled = false;
  Arr = Array;
  data = '';
  isDisabled;
  isReadOnly;
  count;
  types;
  /**
   * To get data from child component(Input Code component)
   */
  getData(data) {
    this.data = data;
    console.log(this.data);
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
