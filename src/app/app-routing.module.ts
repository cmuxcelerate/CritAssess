import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pre-test_pages/home/home.component';
import { AssessmentPageComponent } from './assessment_view/assessment-page/assessment-page.component';
import { DirectionsPageComponent } from './pre-test_pages/directions-page/directions-page.component';
import { ReportComponent } from './post-test_pages/report/report.component';
import { PostTestPagesComponent } from './post-test_pages/post-test-pages.component';
// import {TestComponent } from './test/test.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'assessment', component: AssessmentPageComponent },
{ path: 'directions', component: DirectionsPageComponent },
{ path: 'review', component: PostTestPagesComponent },
{ path: 'review/report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
