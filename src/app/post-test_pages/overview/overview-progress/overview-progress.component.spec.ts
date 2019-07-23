import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProgressComponent } from './overview-progress.component';

describe('OverviewProgressComponent', () => {
  let component: OverviewProgressComponent;
  let fixture: ComponentFixture<OverviewProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
