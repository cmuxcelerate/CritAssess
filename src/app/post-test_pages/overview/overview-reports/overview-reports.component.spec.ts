import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewReportsComponent } from './overview-reports.component';

describe('OverviewReportsComponent', () => {
  let component: OverviewReportsComponent;
  let fixture: ComponentFixture<OverviewReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
