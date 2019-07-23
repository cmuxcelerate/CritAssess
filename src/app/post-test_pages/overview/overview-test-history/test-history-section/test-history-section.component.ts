import { Component, OnInit, Input } from '@angular/core';
import { AssessmentService } from '../../../../assessment_data/assessment.service';
@Component({
  selector: 'app-test-history-section',
  templateUrl: './test-history-section.component.html',
  styleUrls: ['./test-history-section.component.css']
})
export class TestHistorySectionComponent implements OnInit {

	@Input() section: string;
	@Input() scenarios: string;
	@Input() duration: string;

	get assessment() {
		return this.assessmentService.assessment;
	}

	// Resets assessment indices to start review at beginning of test
	goToFeedback() {
		this.assessment.scenario = 0;
		this.assessment.question = 0;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
