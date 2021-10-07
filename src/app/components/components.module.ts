import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';

const components = [
  CharacterComponent,
  EpisodeComponent,
  LocationComponent,
  PageHeaderComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [...components]
})
export class ComponentsModule { }
