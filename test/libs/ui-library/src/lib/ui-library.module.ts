import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { AlertComponent } from './components/alert/alert.component';
import { InputCodeComponent } from './components/input-code/input-code.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ImgGalleryComponent } from './components/img-gallery/img-gallery.component';
import { CenteredCardComponent } from './components/cards/centered-card/centered-card.component';
import { CtaCardComponent } from './components/cards/cta-card/cta-card.component';
import { WideCardComponent } from './components/cards/wide-card/wide-card.component';
import { FullsizeCardComponent } from './components/cards/fullsize-card/fullsize-card.component';
import { PlansCardComponent } from './components/cards/plans-card/plans-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
  declarations: [
    AlertComponent,
    InputCodeComponent,
    LogoComponent,
    BreadcrumbComponent,
    ImgGalleryComponent,
    CenteredCardComponent,
    CtaCardComponent,
    WideCardComponent,
    FullsizeCardComponent,
    PlansCardComponent,
  ],
  exports: [
    AlertComponent,
    InputCodeComponent,
    LogoComponent,
    BreadcrumbComponent,
    ImgGalleryComponent,
    CenteredCardComponent,
    CtaCardComponent,
    WideCardComponent,
    FullsizeCardComponent,
    PlansCardComponent,
  ],
})
/**
 * Ui Library
 */
export class UiLibraryModule {}
