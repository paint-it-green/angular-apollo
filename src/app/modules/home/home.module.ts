import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PageListLayoutComponent, PageListLayoutModule } from 'src/app/layouts/page-list-layout';
import { ComponentsModule } from 'src/app/components';
import { SelectPipe } from 'src/app/core/pipes/select.pipe';

const routes: Routes = [
  {
    path: '',
    component: PageListLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SelectPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageListLayoutModule,
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class HomeModule { }
