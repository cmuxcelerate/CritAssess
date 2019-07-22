import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTestPagesComponent } from './post-test-pages.component';

describe('PostTestPagesComponent', () => {
  let component: PostTestPagesComponent;
  let fixture: ComponentFixture<PostTestPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTestPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTestPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
