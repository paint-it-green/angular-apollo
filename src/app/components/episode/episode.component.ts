import { Component, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/core/components';
import { Episode } from 'src/app/core/interfaces';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent extends BaseComponent implements OnInit {

  @Input()
  episode!: Episode;
  
  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void { }

}
