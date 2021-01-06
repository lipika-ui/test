import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UbcPagesAppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'pages',
    redirectTo: 'pages/landing',
  },
  {
    path: 'pages/landing',
    component: LandingComponent,
  },
  {
    path: 'pages/home',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    UbcPagesAppComponent,
    LandingComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [UbcPagesAppComponent],
})
export class UbcPagesAppModule {}

@NgModule({})
export class UbcPagesSharedAppModule {
  static forRoot(): ModuleWithProviders<UbcPagesSharedAppModule> {
    return {
      ngModule: UbcPagesAppModule,
      providers: [],
    };
  }
}
