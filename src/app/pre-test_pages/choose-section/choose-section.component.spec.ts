import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSectionComponent } from './choose-section.component';

describe('ChooseSectionComponent', () => {
  let component: ChooseSectionComponent;
  let fixture: ComponentFixture<ChooseSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
