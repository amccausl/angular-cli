/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { <%= classifiedModuleName %>Dialog } from './<%= dasherizedModuleName %>.dialog';

describe('<%= classifiedModuleName %>Dialog', () => {
  let component: <%= classifiedModuleName %>Dialog;
  let fixture: ComponentFixture<<%= classifiedModuleName %>Dialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classifiedModuleName %>Dialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classifiedModuleName %>Dialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect( component ).toBeTruthy();
  });
});
