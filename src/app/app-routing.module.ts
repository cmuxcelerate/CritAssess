import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentPageComponent } from './assessment_view/assessment-page/assessment-page.component';
import { DirectionsPageComponent } from './assessment_view/pre-test_pages/directions-page/directions-page.component';
// import {TestComponent } from './test/test.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'assessment', component: AssessmentPageComponent },
{ path: 'directions', component: DirectionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
