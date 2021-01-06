import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

export interface Iimages {
  path: string;
  altTag: string;
}
export interface Imatrix {
  cols: number;
  rows: number;
}
@Component({
  selector: 'lla-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss'],
})
export class ImgGalleryComponent implements OnInit {
  @Input() imageList: Iimages[];
  @Output() clickHandler: EventEmitter<null> = new EventEmitter();
  maxImageToBeShown = 6;
  // Pattern to get the desired layout based on image count
  galleryDesignsAvailable = [
    [{ cols: 1, rows: 1 }],
    [
      { cols: 1, rows: 2 },
      { cols: 1, rows: 2 },
    ],
    [
      { cols: 1, rows: 2 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ],
    [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ],
    [
      { cols: 1, rows: 2 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ],
    [
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
      { cols: 1, rows: 1 },
    ],
  ];
  imgCount: number;
  layoutPatternPicked: Imatrix[];
  columnCount: number;

  /**
   * Initate the image gallery
   */
  ngOnInit(): void {
    this.imgCount = this.imageList.length;
    this.columnCount = this.getColumnCount(this.imgCount);
    const pattern = this.getLayoutPattern();
    this.layoutPatternPicked = this.galleryDesignsAvailable[pattern];
  }
  /**
   * Get the total number of grid columns.
   * The column count for 1 image will be 1.
   * The column count for 2 to 4 image will be 2.
   * The column count for more than 4 image will be 3.
   */
  getColumnCount(imgCount: number): number {
    return imgCount >= 5 ? 3 : imgCount == 1 ? 1 : 2;
  }
  /**
   * Based on image count, decide to choose gallery pattern from the list of galleryDesignsAvailable
   * Pick galleryDesignsAvailable[count-1] if the image size is count.
   * Pick galleryDesignsAvailable[6] if the image size is more than 6.
   */
  getLayoutPattern(): number {
    return this.imgCount > this.maxImageToBeShown ? 5 : this.imgCount - 1;
  }
  /**
   * On click handler for gallery
   */
  onClickHandler(): void {
    this.clickHandler.emit();
  }
}
