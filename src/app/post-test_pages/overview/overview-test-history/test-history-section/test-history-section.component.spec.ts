import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHistorySectionComponent } from './test-history-section.component';

describe('TestHistorySectionComponent', () => {
  let component: TestHistorySectionComponent;
  let fixture: ComponentFixture<TestHistorySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHistorySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHistorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
