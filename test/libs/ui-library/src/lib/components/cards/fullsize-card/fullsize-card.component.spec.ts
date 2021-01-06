import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullsizeCardComponent } from './fullsize-card.component';

describe('FullsizeCardComponent', () => {
  let component: FullsizeCardComponent;
  let fixture: ComponentFixture<FullsizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullsizeCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullsizeCardComponent);
    component = fixture.componentInstance;
    component.cardVariant = 'FULLSIZE';
    component.cardData = {
      imageUrl: '',
      title: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
