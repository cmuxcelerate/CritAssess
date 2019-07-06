import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPageIconComponent } from './test-page-icon.component';

describe('TestPageIconComponent', () => {
  let component: TestPageIconComponent;
  let fixture: ComponentFixture<TestPageIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPageIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
