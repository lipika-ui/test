import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImgGalleryComponent } from './img-gallery.component';

describe('ImgGalleryComponent', () => {
  let component: ImgGalleryComponent;
  let fixture: ComponentFixture<ImgGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgGalleryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGalleryComponent);
    component = fixture.componentInstance;
    component.imageList = [
      { altTag: 'img1', path: './assets/sampleImg1.png' },
      { altTag: 'img1', path: './assets/sampleImg3.png' },
      { altTag: 'img1', path: './assets/sampleImg4.png' },
      { altTag: 'img1', path: './assets/sampleImg5.png' },
      { altTag: 'img1', path: './assets/sampleImg2.png' },
      { altTag: 'img1', path: './assets/sampleImg.png' },
      { altTag: 'img1', path: './assets/sampleImg1.png' },
    ];
    component.imgCount = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling click handler function', () => {
    spyOn(component.clickHandler, 'emit');
    const nativeElement = fixture.nativeElement;
    const span = nativeElement.querySelector('span');
    span.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.clickHandler.emit).toHaveBeenCalled();
  });

  it('testing component with empty image list', () => {
    component.imageList = [];
    expect(component).toBeTruthy();
  });

  it('calling getColumnCount method with max value', () => {
    const imgCount = 7;
    const value = component.getColumnCount(imgCount);
    expect(value).toEqual(3);
  });

  it('calling getColumnCount method with min value', () => {
    const imgCount = 1;
    const value = component.getColumnCount(imgCount);
    expect(value).toBeTruthy();
  });

  it('calling getColumnCount method with min value', () => {
    const imgCount = 2;
    const value = component.getColumnCount(imgCount);
    expect(value).toBeTruthy();
  });

  it('calling getLayoutPattern method with min value', () => {
    component.imgCount = 1;
    const value = component.getLayoutPattern();
    expect(value).toEqual(0);
  });

  it('calling getLayoutPattern method with max value', () => {
    component.imgCount = 7;
    const value = component.getLayoutPattern();
    expect(value).toBeGreaterThan(4);
  });
});
