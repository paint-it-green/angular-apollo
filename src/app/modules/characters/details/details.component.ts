import { Component, Injector, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { BaseComponent } from 'src/app/core/components';
import { Character } from 'src/app/core/interfaces';
import { GET_CHARACTER } from '../characters.graphql';

@Component({
  selector: 'app-character-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class CharacterDetailsComponent extends BaseComponent implements OnInit {

  character!: Character;

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
        const characterId = params.get('character-id') as string;
        this.getCharacter(characterId);
      }
    })
  }

  getCharacter(id: string): void {
    this.subscription = this.apollo.watchQuery<{
      character: Character,
      notifyOnNetworkStatusChange: true
    }>({
      query: GET_CHARACTER,
      variables: {
        id
      },
    }).valueChanges
    .subscribe({
      next: ({data, loading}) => {
        this.loading = loading;
        this.character = data.character;
      },
    })
  }

}
