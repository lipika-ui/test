import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCardComponent } from './wide-card.component';

describe('WideCardComponent', () => {
  let component: WideCardComponent;
  let fixture: ComponentFixture<WideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WideCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WideCardComponent);
    component = fixture.componentInstance;
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
