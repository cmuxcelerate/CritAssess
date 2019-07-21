import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';
import { KnowledgeComponent } from '../../assessment_data/assessment_classes/knowledgeComponent';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

	top3Kcs: Array<KnowledgeComponent>;
	bottom3Kcs: Array<KnowledgeComponent>;
	get assessment() {
		return this.assessmentService.assessment;
	}

	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
		this.top3Kcs = this.assessment.top3KCs;
		this.bottom3Kcs = this.assessment.bottom3KCs;
		console.log("initializing report. top 3 kcs:");
		console.log(this.top3Kcs);
		console.log(this.bottom3Kcs);
	}

}
