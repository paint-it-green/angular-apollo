import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './details.component';
import { PageListLayoutComponent, PageListLayoutModule } from 'src/app/layouts/page-list-layout';
import { ComponentsModule } from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: PageListLayoutComponent,
    children: [
      {
        path: '',
        component: CharacterDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageListLayoutModule,
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class CharacterDetailsModule { }
