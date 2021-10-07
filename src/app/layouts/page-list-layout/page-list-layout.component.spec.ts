import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListLayoutComponent } from './page-list-layout.component';

describe('PageListLayoutComponent', () => {
  let component: PageListLayoutComponent;
  let fixture: ComponentFixture<PageListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
