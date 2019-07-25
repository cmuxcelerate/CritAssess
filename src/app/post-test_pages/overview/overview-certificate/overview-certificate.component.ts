import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../assessment_data/assessment.service';

@Component({
  selector: 'app-overview-certificate',
  templateUrl: './overview-certificate.component.html',
  styleUrls: ['./overview-certificate.component.css']
})
export class OverviewCertificateComponent implements OnInit {

	get assessment() {
		return this.assessmentService.assessment;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
