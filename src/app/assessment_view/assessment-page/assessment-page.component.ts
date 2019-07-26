import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.css']
})
export class AssessmentPageComponent implements OnInit {

	minimumHeight: string; //Minimum height of this page (prevents whitespace at page bottom)
	get assessment() {
		return this.assessmentService.assessment;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
		// min height is window - header - assessmentHeader - footer
		const height = window.innerHeight - 82 - 52 - 78;
		this.minimumHeight =  height + "px";
	}

}
