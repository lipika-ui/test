import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lla-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
/**
 * List Component
 */
export class ListComponent implements OnInit {
  list;
  backgroundColor;
  icon = false;
  horizontal = false;
  Arr = Array;

  /**
   * List component NgOnInit
   */
  ngOnInit(): void {
    // Empty ngOnInit
  }
}
