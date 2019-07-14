import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../assessment_data/assessment.service';
import { Assessment } from '../../../assessment_data/assessment_classes/assessment';
@Component({
  selector: 'app-s1q1',
  templateUrl: './s1q1.component.html',
  styleUrls: ['./s1q1.component.css']
})
export class S1q1Component implements OnInit {

	// assessmentService: AssessmentService;
	get assessment(): Assessment {
		return this.assessmentService.assessment;
	}

	constructor(private assessmentService: AssessmentService) {
		
	}
	ngOnInit() {
	}

}
