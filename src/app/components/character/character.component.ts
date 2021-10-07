import { Component, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/core/components';
import { Character } from 'src/app/core/interfaces';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent extends BaseComponent implements OnInit {

  @Input()
  character!: Character;

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void { }

}
