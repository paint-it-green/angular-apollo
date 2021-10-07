import { Component, Injector, OnInit } from '@angular/core';

import {Apollo} from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Character, Characters, Info } from 'src/app/core/interfaces';
import { Pagination } from 'src/app/core/models';
import { FilterCharacter, FILTER_KEYS, GET_ALL_CHARACTERS } from '../characters.graphql';

@Component({
  selector: 'app-character-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CharacterListComponent extends BaseComponent implements OnInit {

  filters = '';
  
  characters: Array<Character> = [];
  info!: Info;
  pagination = new Pagination<FilterCharacter>();

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
        this.getCharacters(this.pagination);
      }
    })
  }

  getCharacters(pagination: Pagination<FilterCharacter>): void {
    this.subscription = this.apollo.watchQuery<{
      characters: Characters,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_ALL_CHARACTERS,
      variables: pagination.getGraphQLParams()
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.characters.push(...data.characters.results);
        this.info = data.characters.info;
      },
      error: (error) => this.reset()
    })
  }

  loadMore(): void {
    if(this.info.next) {
      this.getCharacters(this.pagination.nextPage());
    }
  }

  reset(): void {
    this.pagination.reset();
    this.characters = [];
  }

}
