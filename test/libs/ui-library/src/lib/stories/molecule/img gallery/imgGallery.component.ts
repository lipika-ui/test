import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'storybook-imgGallery',
  template: ` <div
    [ngClass]="[gridSize ? gridSize : '']"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    <lla-img-gallery
      *ngIf="count == 1"
      [imageList]="imageList.slice(0, this.count)"
    >
    </lla-img-gallery>
    <lla-img-gallery *ngIf="count == 2" [imageList]="imageList.slice(0, 2)">
    </lla-img-gallery>
    <lla-img-gallery *ngIf="count == 3" [imageList]="imageList.slice(0, 3)">
    </lla-img-gallery>
    <lla-img-gallery *ngIf="count == 4" [imageList]="imageList.slice(0, 4)">
    </lla-img-gallery>
    <lla-img-gallery *ngIf="count == 5" [imageList]="imageList.slice(0, 5)">
    </lla-img-gallery>
    <lla-img-gallery *ngIf="count == 6" [imageList]="imageList.slice(0, 6)">
    </lla-img-gallery>
    <lla-img-gallery
      *ngIf="count == 7"
      (clickHandler)="handleClick()"
      [imageList]="imageList.slice(0, 7)"
    >
    </lla-img-gallery>
    <lla-img-gallery
      *ngIf="count == 8"
      (clickHandler)="handleClick()"
      [imageList]="imageList.slice(0, 8)"
    >
    </lla-img-gallery>
    <lla-img-gallery
      *ngIf="count == 9"
      (clickHandler)="handleClick()"
      [imageList]="imageList.slice(0, 9)"
    >
    </lla-img-gallery>
    <lla-img-gallery
      *ngIf="count == 10"
      (clickHandler)="handleClick()"
      [imageList]="imageList.slice(0, 10)"
    >
    </lla-img-gallery>
    <lla-img-gallery
      *ngIf="count == 11"
      (clickHandler)="handleClick()"
      [imageList]="imageList.slice(0, 11)"
    >
    </lla-img-gallery>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="gallery-modal">
          <span class="close">&times;</span>
          <lla-img-gallery [imageList]="imageList.slice(0, 7)">
          </lla-img-gallery>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./imgGallery.scss'],
})
/**
 * StoryLogoComponent
 */
export default class StoryImgGalleryComponent {
  gridSize = '';
  /**
   *
   * @param dialog
   */
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.gridSize = 'XS';
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.gridSize = 'SM';
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.gridSize = 'MD';
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.gridSize = 'LG';
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.gridSize = 'XL';
          }
          if (result.breakpoints[Breakpoints.HandsetLandscape]) {
            this.gridSize = 'SML';
          }
        }
      });
  }
  backgroundColor = '';
  getTheme = 'VTR';
  altContent = 'logo';
  count = 5;
  showPOP = false;
  imageListVTR = [
    { altTag: 'img1', path: './vtr/sampleImg.png' },
    { altTag: 'img1', path: './vtr/sampleImg1.png' },
    { altTag: 'img1', path: './vtr/sampleImg2.png' },
    { altTag: 'img1', path: './vtr/sampleImg3.png' },
    { altTag: 'img1', path: './vtr/sampleImg4.png' },
    { altTag: 'img1', path: './vtr/sampleImg5.png' },
    { altTag: 'img1', path: './vtr/sampleImg.png' },
    { altTag: 'img1', path: './vtr/sampleImg1.png' },
    { altTag: 'img1', path: './vtr/sampleImg2.png' },
    { altTag: 'img1', path: './vtr/sampleImg3.png' },
    { altTag: 'img1', path: './vtr/sampleImg4.png' },
    { altTag: 'img1', path: './vtr/sampleImg5.png' },
  ];
  imageListFlow = [
    { altTag: 'img1', path: './flow/sampleImg.png' },
    { altTag: 'img1', path: './flow/sampleImg1.png' },
    { altTag: 'img1', path: './flow/sampleImg2.png' },
    { altTag: 'img1', path: './flow/sampleImg3.png' },
    { altTag: 'img1', path: './flow/sampleImg4.png' },
    { altTag: 'img1', path: './flow/sampleImg5.png' },
    { altTag: 'img1', path: './flow/sampleImg.png' },
    { altTag: 'img1', path: './flow/sampleImg1.png' },
    { altTag: 'img1', path: './flow/sampleImg2.png' },
    { altTag: 'img1', path: './flow/sampleImg3.png' },
    { altTag: 'img1', path: './flow/sampleImg4.png' },
    { altTag: 'img1', path: './flow/sampleImg5.png' },
  ];
  imageList = this.imageListVTR;

  /**
   * StoryLogoComponent
   */
  ngOnInit() {
    console.log(this.count);
    window.addEventListener('storage', () => {
      this.getTheme = sessionStorage.getItem('theme');
      if (this.getTheme == 'Flow') {
        this.imageList = this.imageListFlow;
      }
      if (this.getTheme == 'VTR') {
        this.imageList = this.imageListVTR;
      }
    });
  }
  /**
   *
   */
  handleClick() {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
}
