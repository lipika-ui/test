import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { By } from '@angular/platform-browser';
describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    component.breadCrumb = ['home', 'tv'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing component with empty breadCrumb list', () => {
    component.breadCrumb = [];
    expect(component).toBeTruthy();
  });

  it('calling click handler function', () => {
    spyOn(component.clickHandler, 'emit');
    const nativeElement = fixture.nativeElement;
    const aTag = nativeElement.querySelector('a');
    aTag.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.clickHandler.emit).toHaveBeenCalled();
  });

  it('testing click handler function to return value', () => {
    spyOn(component.clickHandler, 'emit');
    const aTag = fixture.debugElement.query(
      By.css('.breadcrumb__wrapper__item')
    );
    aTag.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.clickHandler.emit).toHaveBeenCalledWith('home');
  });
});
