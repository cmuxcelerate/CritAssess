import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressWheelComponent } from './progress-wheel.component';

describe('ProgressWheelComponent', () => {
  let component: ProgressWheelComponent;
  let fixture: ComponentFixture<ProgressWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
