import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeDetailsComponent } from './details.component';
import { PageListLayoutComponent, PageListLayoutModule } from 'src/app/layouts/page-list-layout';

const routes: Routes = [
  {
    path: '',
    component: PageListLayoutComponent,
    children: [
      {
        path: '',
        component: EpisodeDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    EpisodeDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageListLayoutModule,
  ],
  exports: [RouterModule],
})
export class EpisodeDetailsModule { }
