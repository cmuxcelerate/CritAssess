import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1q1Component } from './s1q1.component';

describe('S1q1Component', () => {
  let component: S1q1Component;
  let fixture: ComponentFixture<S1q1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1q1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
