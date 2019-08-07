import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchHeaderComponent } from './research-header.component';

describe('ResearchHeaderComponent', () => {
  let component: ResearchHeaderComponent;
  let fixture: ComponentFixture<ResearchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
