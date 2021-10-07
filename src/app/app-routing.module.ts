import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home').then((m) => m.HomeModule)
  },
  {
    path: 'characters',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/characters').then((m) => m.CharacterListModule)
      },
      {
        path: ':character-id',
        loadChildren: () =>
          import('./modules/characters').then((m) => m.CharacterDetailsModule)
      }
    ]
  },
  {
    path: 'episodes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/episodes').then((m) => m.EpisodeListModule)
      },
      {
        path: ':episode-id',
        loadChildren: () =>
          import('./modules/episodes').then((m) => m.EpisodeDetailsModule)
      }

    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/locations').then((m) => m.LocationListModule)
      },
      {
        path: ':location-id',
        loadChildren: () =>
          import('./modules/locations').then((m) => m.LocationDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
