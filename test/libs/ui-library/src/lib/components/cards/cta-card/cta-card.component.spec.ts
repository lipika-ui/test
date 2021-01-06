import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCardComponent } from './cta-card.component';

describe('CtaCardComponent', () => {
  let component: CtaCardComponent;
  let fixture: ComponentFixture<CtaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtaCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaCardComponent);
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
