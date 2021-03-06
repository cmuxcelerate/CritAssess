import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pre-test_pages/home/home.component';
import { AssessmentPageComponent } from './assessment_view/assessment-page/assessment-page.component';
import { DirectionsPageComponent } from './pre-test_pages/directions-page/directions-page.component';
import { ReportComponent } from './post-test_pages/report/report.component';
import { PostTestPagesComponent } from './post-test_pages/post-test-pages.component';
import { OverviewComponent } from './post-test_pages/overview/overview.component';
import { CertificateComponent } from './post-test_pages/certificate/certificate.component';
import { AboutComponent } from './pre-test_pages/about/about.component';
import { ResearchComponent } from './pre-test_pages/research/research.component';
import { DevelopmentComponent } from './pre-test_pages/development/development.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'research', component: ResearchComponent },
{ path: 'development', component: DevelopmentComponent },
{ path: 'assessment', component: AssessmentPageComponent },
{ path: 'directions', component: DirectionsPageComponent },
{ path: 'review', component: PostTestPagesComponent, 
	children: [
		{ path: '', redirectTo: 'overview', pathMatch: 'full' },
		{ path: 'overview', component: OverviewComponent },
		{ path: 'report', component: ReportComponent },
		{ path: 'certificate', component: CertificateComponent },

	]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
