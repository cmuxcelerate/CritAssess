import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTestHistoryComponent } from './overview-test-history.component';

describe('OverviewTestHistoryComponent', () => {
  let component: OverviewTestHistoryComponent;
  let fixture: ComponentFixture<OverviewTestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
