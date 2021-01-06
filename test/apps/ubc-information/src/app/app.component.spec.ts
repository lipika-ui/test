import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UBCInformationComponent } from './app.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
describe('UBCInformationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UBCInformationComponent, NavBarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UBCInformationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
