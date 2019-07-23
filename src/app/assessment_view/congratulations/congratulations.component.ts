import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';
@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

	get assessment() {
		return this.assessmentService.assessment;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
