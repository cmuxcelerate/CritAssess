import { Component, OnInit } from '@angular/core';
import {AssessmentService } from '../../assessment_data/assessment.service';

@Component({
  selector: 'app-report-navbar',
  templateUrl: './report-navbar.component.html',
  styleUrls: ['./report-navbar.component.css']
})
export class ReportNavbarComponent implements OnInit {

	get assessment() {
		return this.assessmentService.assessment;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
