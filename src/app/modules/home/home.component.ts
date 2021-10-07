import { Component, Injector, OnInit } from '@angular/core';

import {Apollo} from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Characters, Episodes, Locations } from 'src/app/core/interfaces';
import { GET_DATA } from './home.graphql';

type IData = {
  characters: Characters;
  locations: Locations;
  episodes: Episodes; 
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
  extends BaseComponent
  implements OnInit {
  
  data!: IData;

  constructor(
    protected injector: Injector,
    private apollo: Apollo
  ) {
    super(injector);
  }

  ngOnInit(): void {

    this.subscription = this.apollo.watchQuery<IData>({ query: GET_DATA }).valueChanges
    .subscribe({
      next: (response) => this.data = response.data
    })
  }

}
