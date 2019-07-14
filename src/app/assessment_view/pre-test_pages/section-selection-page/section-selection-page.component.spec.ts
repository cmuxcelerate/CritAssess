import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectionPageComponent } from './section-selection-page.component';

describe('SectionSelectionPageComponent', () => {
  let component: SectionSelectionPageComponent;
  let fixture: ComponentFixture<SectionSelectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
