import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeListComponent } from './list.component';
import { ComponentsModule } from 'src/app/components';
import { PageListLayoutComponent, PageListLayoutModule } from 'src/app/layouts/page-list-layout';

const routes: Routes = [
  {
    path: '',
    component: PageListLayoutComponent,
    children: [
      {
        path: '',
        component: EpisodeListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    EpisodeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageListLayoutModule,
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class EpisodeListModule { }
