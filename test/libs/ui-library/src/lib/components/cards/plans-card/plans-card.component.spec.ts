import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCardComponent } from './plans-card.component';

describe('PlansCardComponent', () => {
  let component: PlansCardComponent;
  let fixture: ComponentFixture<PlansCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlansCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansCardComponent);
    component = fixture.componentInstance;
    component.cardData = {
      imageUrl: '',
      title: '',
      altText: '',
      planContent: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
