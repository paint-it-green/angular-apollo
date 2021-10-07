import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-layout',
  templateUrl: './page-list-layout.component.html',
  styleUrls: ['./page-list-layout.component.scss']
})
export class PageListLayoutComponent implements OnInit {

  hideMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

}
