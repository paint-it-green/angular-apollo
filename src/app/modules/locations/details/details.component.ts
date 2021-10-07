import { Component, Injector, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Location } from 'src/app/core/interfaces';
import { GET_LOCATION } from '../locations.graphql';

@Component({
  selector: 'app-location-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class LocationDetailsComponent extends BaseComponent implements OnInit {

  location!: Location;

  constructor(
    protected injector: Injector,
    private apollo: Apollo,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.paramMap
    .subscribe({
      next: (params) => {
        const locationId = params.get('location-id') as string;
        this.getLocation(locationId);
      }
    })
  }

  getLocation(id: string): void {
    this.subscription = this.apollo.watchQuery<{
      location: Location,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_LOCATION,
      variables: {
        id
      },
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.location = data.location;
      },
    })
  }

}
