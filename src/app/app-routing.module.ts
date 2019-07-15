import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { S1q1Component } from './assessment_view/question_views_with_scenarios/s1q1/s1q1.component';
import { AssessmentPageComponent } from './assessment_view/question_views_with_scenarios/assessment-page/assessment-page.component';
// import {TestComponent } from './test/test.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 's1q1', component: S1q1Component },
{ path: 'assessment', component: AssessmentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
