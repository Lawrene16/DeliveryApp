import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubjecttypesPage } from './listsubjecttypes.page';

describe('ListsubjecttypesPage', () => {
  let component: ListsubjecttypesPage;
  let fixture: ComponentFixture<ListsubjecttypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubjecttypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubjecttypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
