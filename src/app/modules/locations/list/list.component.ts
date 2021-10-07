import { Component, Injector, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Info, Location, Locations } from 'src/app/core/interfaces';
import { Pagination } from 'src/app/core/models';
import { FilterLocation, FILTER_KEYS, GET_ALL_LOCATIONS } from '../locations.graphql';

@Component({
  selector: 'app-location-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class LocationListComponent extends BaseComponent implements OnInit {

  filters = '';
  
  locations: Array<Location> = [];
  info!: Info;
  pagination = new Pagination<FilterLocation>();

  constructor(
    protected injector: Injector,
    private apollo: Apollo,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.queryParams
    .subscribe({
      next: (params) => {
        
        this.reset();

        const filters: Array<string> = [];
        Object.entries(params).forEach(([key, value]) => {
          if (FILTER_KEYS.includes(key)) {
            filters.push(value as string);
            this.pagination.addFilter(key as any, value);
          }
        })
        this.filters = filters.length ? filters.join(', ') : 'All';
        this.getLocations(this.pagination);
      }
    })
  }

  getLocations(pagination: Pagination<FilterLocation>): void {
    this.subscription = this.apollo.watchQuery<{
      locations: Locations,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_ALL_LOCATIONS,
      variables: pagination.getGraphQLParams()
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.locations.push(...data.locations.results);
        this.info = data.locations.info;
      },
      error: (error) => this.reset()
    })
  }

  loadMore(): void {
    if(this.info.next) {
      this.getLocations(this.pagination.nextPage());
    }
  }

  reset(): void {
    this.pagination.reset();
    this.locations = [];
  }

}
