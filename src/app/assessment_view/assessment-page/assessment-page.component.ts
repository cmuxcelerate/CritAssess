import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.css']
})
export class AssessmentPageComponent implements OnInit {


	get assessment() {
		return this.assessmentService.assessment;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
