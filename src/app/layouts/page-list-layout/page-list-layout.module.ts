import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageListLayoutComponent } from './page-list-layout.component';

@NgModule({
  declarations: [PageListLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PageListLayoutComponent]
})
export class PageListLayoutModule { }
