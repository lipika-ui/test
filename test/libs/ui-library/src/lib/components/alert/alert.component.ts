import { Component, EventEmitter, Input, Output } from '@angular/core';

type COMPONENT_STATUS = 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO';
type COMPONENT_OPACITY = '24' | '40' | '100';
type COMPONENT_TYPE = 'full-width' | 'default';

@Component({
  selector: 'lla-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})

/**
 * Alerts component
 */
export class AlertComponent {
  @Input() status: COMPONENT_STATUS;
  @Input() opacity?: COMPONENT_OPACITY = '100';
  @Input() type?: COMPONENT_TYPE = 'default';
  @Input() title: string;
  @Input() body?: string = '';
  @Output() clickHandler?: EventEmitter<null> = new EventEmitter();

  /**
   * To emit click event to parent component
   */
  onClose() {
    this.clickHandler.emit();
  }
}
