import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentNavbarComponent } from './assessment-navbar.component';

describe('AssessmentNavbarComponent', () => {
  let component: AssessmentNavbarComponent;
  let fixture: ComponentFixture<AssessmentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
