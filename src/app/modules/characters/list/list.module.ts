import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './list.component';
import { PageListLayoutComponent, PageListLayoutModule } from 'src/app/layouts/page-list-layout';
import { ComponentsModule } from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: PageListLayoutComponent,
    children: [
      {
        path: '',
        component: CharacterListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageListLayoutModule,
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class CharacterListModule { }
