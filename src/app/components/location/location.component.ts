import { Component, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from 'src/app/core/components';
import { Location } from 'src/app/core/interfaces';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent extends BaseComponent implements OnInit {

  @Input()
  location!: Location;

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void { }

}
