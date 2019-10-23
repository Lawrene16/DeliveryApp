import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubjecttypePage } from './addsubjecttype.page';

describe('AddsubjecttypePage', () => {
  let component: AddsubjecttypePage;
  let fixture: ComponentFixture<AddsubjecttypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubjecttypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubjecttypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
