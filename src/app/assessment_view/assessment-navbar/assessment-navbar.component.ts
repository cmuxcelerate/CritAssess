import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../assessment_data/assessment.service';
@Component({
  selector: 'app-assessment-navbar',
  templateUrl: './assessment-navbar.component.html',
  styleUrls: ['./assessment-navbar.component.css']
})
export class AssessmentNavbarComponent implements OnInit {
	assessmentTime: number = 0;
	showTimer: boolean;
	get assessment()  {
		return this.assessmentService.assessment;
	}

	// Shows/Hides timer
	toggleTimer() {
		this.showTimer = !this.showTimer;
	}

	get assessmentSeconds(): string {
		let res = this.assessmentTime % 60;
		let stringRes = res.toString();
		if (res < 10) stringRes = "0" + stringRes;
		return stringRes;
	}

	get assessmentMinutes(): string {
		let res =  Math.floor(this.assessmentTime/60);
		let stringRes = res.toString();
		if (res < 10) stringRes = "0" + stringRes;
		return stringRes;
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
		this.showTimer = false;
		// Start timer
		setInterval(_ => {
			this.assessmentTime++;
		}, 1000);
	}

}
