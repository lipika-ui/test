import { Component, Input, Output, EventEmitter } from '@angular/core';

type COMPENETSTATUS = 'SUCCESS' | 'ERROR' | 'DEFAULT';
type COMPENETTYPE = 'FILLIN' | 'OUTLINE';

@Component({
  selector: 'lla-input-code',
  templateUrl: './input-code.component.html',
  styleUrls: ['./input-code.component.scss'],
})

/**
 * InputCodeComponent
 */
export class InputCodeComponent {
  @Input() count?: number = 4;
  @Input() types?: COMPENETTYPE = 'FILLIN';
  @Input() status?: COMPENETSTATUS = 'DEFAULT';
  @Input() isDisabled?: boolean = false;
  @Input() isReadOnly?: boolean = false;
  @Output() sendData: EventEmitter<string[]> = new EventEmitter();
  userEnteredValue = [];
  Arr = Array;
  /**
   * Input InputCodeComponent
   */
  constructor() {
    // Empty constructor
  }
  /**
   * Converting text input to password input
   */
  onInputEntered(event, i: number) {
    this.userEnteredValue[i] = event.target.value;
    if (this.isUserErasing(event)) {
      document
        .getElementById('mat-input-' + i.toString())
        .setAttribute('type', 'text');
    } else if (this.isUserEntersData(event)) {
      // Coverting text type to password type after 300sec. Delay has been implemented for animation purpose.
      setTimeout(() => {
        document
          .getElementById('mat-input-' + i.toString())
          .setAttribute('type', 'password');
      }, 300);
      this.switchToNextTab(i);
    }
    this.updateParent(this.userEnteredValue);
  }
  /**
   * Check if user is deleting the pre-entered data
   */
  isUserErasing(event): boolean {
    return event.code == 'Backspace' || event.code == 'Delete' ? true : false;
  }
  /**
   * Check if user enters a Numeric or Alpha character
   */
  isUserEntersData(event): boolean {
    return event.code.slice(0, 5) == 'Digit' || event.code.slice(0, 3) == 'Key'
      ? true
      : false;
  }
  /**
   * Automatic switching to next input code
   */
  switchToNextTab(i: number): void {
    const j = i + 1;
    if (j < this.count) {
      document.getElementById('mat-input-' + j.toString()).focus();
    }
  }
  /**
   * Emitting data to parent component
   */
  updateParent(userEnteredValue: string[]): void {
    if (userEnteredValue.length >= this.count) {
      this.sendData.emit(userEnteredValue);
    }
  }
}
