import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCertificateComponent } from './overview-certificate.component';

describe('OverviewCertificateComponent', () => {
  let component: OverviewCertificateComponent;
  let fixture: ComponentFixture<OverviewCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
