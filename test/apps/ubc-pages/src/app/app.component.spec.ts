import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UbcPagesAppComponent } from './app.component';
import { NavBarComponent } from '../../src/app/nav-bar/nav-bar.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UbcPagesAppComponent, NavBarComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UbcPagesAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
