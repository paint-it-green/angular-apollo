import { Component, Injector, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Episode, Episodes, Info } from 'src/app/core/interfaces';
import { Pagination } from 'src/app/core/models';
import { FilterEpisode, FILTER_KEYS, GET_ALL_EPISODES } from '../episodes.graphql';

@Component({
  selector: 'app-episode-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class EpisodeListComponent extends BaseComponent implements OnInit {

  filters = '';
  
  episodes: Array<Episode> = [];
  info!: Info;
  pagination = new Pagination<FilterEpisode>();

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
        this.getEpisodes(this.pagination);
      }
    })
  }

  getEpisodes(pagination: Pagination<FilterEpisode>): void {
    this.subscription = this.apollo.watchQuery<{
      episodes: Episodes,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_ALL_EPISODES,
      variables: pagination.getGraphQLParams()
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.episodes.push(...data.episodes.results);
        this.info = data.episodes.info;
      },
      error: (error) => this.reset()
    })
  }

  loadMore(): void {
    if(this.info.next) {
      this.getEpisodes(this.pagination.nextPage());
    }
  }

  reset(): void {
    this.pagination.reset();
    this.episodes = [];
  }

}
