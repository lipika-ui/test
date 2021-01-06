import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UBCInformationComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'information',
    redirectTo: 'information/landing',
  },
  {
    path: 'information/landing',
    component: LandingComponent,
  },
  {
    path: 'information/home',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    UBCInformationComponent,
    LandingComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [UBCInformationComponent],
})
export class UBCInformationModule {}

@NgModule({})
export class UBCInformationSharedModule {
  static forRoot(): ModuleWithProviders<UBCInformationSharedModule> {
    return {
      ngModule: UBCInformationModule,
      providers: [],
    };
  }
}
