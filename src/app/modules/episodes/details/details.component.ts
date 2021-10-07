import { Component, Injector, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Episode } from 'src/app/core/interfaces';
import { GET_EPISODE } from '../episodes.graphql';

@Component({
  selector: 'app-episode-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class EpisodeDetailsComponent extends BaseComponent implements OnInit {

  episode!: Episode;

  constructor(
    protected injector: Injector,
    private apollo: Apollo
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.paramMap
    .subscribe({
      next: (params) => {
        const episodeId = params.get('episode-id') as string;
        this.getEpisode(episodeId);
      }
    })
  }

  getEpisode(id: string): void {
    this.subscription = this.apollo.watchQuery<{
      episode: Episode,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_EPISODE,
      variables: {
        id
      },
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.episode = data.episode;
      },
    })
  }


}
