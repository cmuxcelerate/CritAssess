import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario7Component } from './scenario7.component';

describe('Scenario7Component', () => {
  let component: Scenario7Component;
  let fixture: ComponentFixture<Scenario7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
