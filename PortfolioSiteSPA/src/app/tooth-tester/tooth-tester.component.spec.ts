/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToothTesterComponent } from './tooth-tester.component';

describe('ToothTesterComponent', () => {
  let component: ToothTesterComponent;
  let fixture: ComponentFixture<ToothTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToothTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
