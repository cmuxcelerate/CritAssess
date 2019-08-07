import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchQuoteComponent } from './research-quote.component';

describe('ResearchQuoteComponent', () => {
  let component: ResearchQuoteComponent;
  let fixture: ComponentFixture<ResearchQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
