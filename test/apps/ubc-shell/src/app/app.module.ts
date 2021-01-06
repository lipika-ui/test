import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app/app.component';
// TODO
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UBCInformationSharedModule } from '../../../ubc-information/src/app/app.module';

// TODO

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UbcPagesSharedAppModule } from '../../../ubc-pages/src/app/app.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// TODO - make a seperate file for routes and move it there
const routes: Routes = [
  {
    path: 'information/',
    loadChildren: '@lla-monorepo/ubc-information/#UBCInformationSharedModule',
  },
  {
    path: 'pages/',
    loadChildren: '@lla-monorepo/ubc-pages/#UbcPagesSharedAppModule',
  },
];
@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UBCInformationSharedModule.forRoot(),
    UbcPagesSharedAppModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
