import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lla-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
/**
 * Logo Component
 */
export class LogoComponent {
  /**
   * Logo parameters
   */
  @Input() imgPath: string;
  @Input() altTag?: string = 'logo';
  @Output() clickHandler?: EventEmitter<null> = new EventEmitter();

  /**
   * Logo Component Constructor
   */
  constructor() {
    // Empty constructor
  }
  /**
   * To emit click event to parent component
   */
  onClickHandler() {
    this.clickHandler.emit();
  }
}
