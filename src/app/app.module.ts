import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Custom Components
import { NavbarComponent } from './navbar/navbar.component';
import { AssessmentNavbarComponent } from './assessment_view/assessment-navbar/assessment-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pre-test_pages/home/home.component';
import { DirectionsPageComponent } from './pre-test_pages/directions-page/directions-page.component';
import { SectionSelectionPageComponent } from './pre-test_pages/section-selection-page/section-selection-page.component';
import { AssessmentPageComponent } from './assessment_view/assessment-page/assessment-page.component';
import { Scenario1Component } from './assessment_view/scenarios/scenario1/scenario1.component';
import { Scenario2Component } from './assessment_view/scenarios/scenario2/scenario2.component';
import { Scenario3Component } from './assessment_view/scenarios/scenario3/scenario3.component';
import { Scenario4Component } from './assessment_view/scenarios/scenario4/scenario4.component';
import { Scenario5Component } from './assessment_view/scenarios/scenario5/scenario5.component';
import { Scenario6Component } from './assessment_view/scenarios/scenario6/scenario6.component';
import { Scenario7Component } from './assessment_view/scenarios/scenario7/scenario7.component';
import { McqComponent } from './assessment_view/question_type_templates/mcq/mcq.component';
import { SelectAllComponent } from './assessment_view/question_type_templates/select-all/select-all.component';
import { GlossaryComponent } from './assessment_view/scenarios/glossary/glossary.component';
import { CongratulationsComponent } from './assessment_view/congratulations/congratulations.component';
import { ReportComponent } from './post-test_pages/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    McqComponent,
    AssessmentNavbarComponent,
    DirectionsPageComponent,
    SectionSelectionPageComponent,
    AssessmentPageComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario4Component,
    Scenario5Component,
    Scenario6Component,
    Scenario7Component,
    SelectAllComponent,
    FooterComponent,
    GlossaryComponent,
    CongratulationsComponent,
    ReportComponent,
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
