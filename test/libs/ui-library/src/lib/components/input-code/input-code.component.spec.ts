import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodeComponent } from './input-code.component';

describe('InputCodeComponent', () => {
  let component: InputCodeComponent;
  let fixture: ComponentFixture<InputCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCodeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling OnInputEntered method', () => {
    const event = {
      code: 'Digit',
      target: {
        value: 5,
      },
    };
    component.count = 0;
    spyOn(component.sendData, 'emit');
    component.onInputEntered(event, 0);
    expect(component.sendData.emit).toHaveBeenCalled();
  });

  it('calling isUserErasing method', () => {
    const event = {
      code: 'Backspace',
    };
    const value = component.isUserErasing(event);
    expect(value).toBeTruthy();
  });

  it('calling isUserEntersData method', () => {
    const event = {
      code: 'Digit',
    };
    const value = component.isUserEntersData(event);
    expect(value).toBeTruthy();
  });

  it('calling isUserEntersData method', () => {
    const event = {
      code: 'D',
    };
    const value = component.isUserEntersData(event);
    expect(value).toBeFalsy();
  });

  it('calling updateParent', () => {
    const eventData = ['testData'];
    component.count = 0;
    spyOn(component.sendData, 'emit');
    component.updateParent(eventData);
    expect(component.sendData.emit).toHaveBeenCalled();
  });
});
