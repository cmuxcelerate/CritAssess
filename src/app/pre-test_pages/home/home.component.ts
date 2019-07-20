import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';
import { Assessment } from '../../assessment_data/assessment_classes/assessment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// assessmentService: AssessmentService;
	get assessment(): Assessment {
		return this.assessmentService.assessment;
	}

	constructor(private assessmentService: AssessmentService) {
		
	}

	ngOnInit() {
	}

}
