import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsPageComponent } from './directions-page.component';

describe('DirectionsPageComponent', () => {
  let component: DirectionsPageComponent;
  let fixture: ComponentFixture<DirectionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
