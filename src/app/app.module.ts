import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import { TestComponent } from './test/test.component';
// import { TestPageIconComponent } from './test/test-page-icon/test-page-icon.component';
import { McqComponent } from './assessment_view/question_type_templates/mcq/mcq.component';
import { AssessmentNavbarComponent } from './assessment_view/assessment-navbar/assessment-navbar.component';
import { DirectionsPageComponent } from './assessment_view/pre-test_pages/directions-page/directions-page.component';
import { SectionSelectionPageComponent } from './assessment_view/pre-test_pages/section-selection-page/section-selection-page.component';
import { Scenario1Component } from './assessment_view/scenarios/scenario1/scenario1.component';
import { S1q1Component } from './assessment_view/question_views_with_scenarios/s1q1/s1q1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    // TestComponent,
    // TestPageIconComponent,
    McqComponent,
    AssessmentNavbarComponent,
    DirectionsPageComponent,
    SectionSelectionPageComponent,
    Scenario1Component,
    S1q1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
