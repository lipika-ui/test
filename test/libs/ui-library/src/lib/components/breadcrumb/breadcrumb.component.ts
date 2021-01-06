import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lla-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})

/**
 * BreadcrumbComponent
 */
export class BreadcrumbComponent {
  @Input() breadCrumb: string[];
  @Input() isDarkMode?: boolean = false;
  @Output() clickHandler: EventEmitter<string> = new EventEmitter();

  /**
   * On click handler of breadcrumb
   */
  onClickHandler(event: MouseEvent): void {
    this.clickHandler.emit((event.target as HTMLInputElement).innerHTML.trim());
  }
}
