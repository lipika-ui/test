import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredCardComponent } from './centered-card.component';

describe('CenteredCardComponent', () => {
  let component: CenteredCardComponent;
  let fixture: ComponentFixture<CenteredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenteredCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredCardComponent);
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
