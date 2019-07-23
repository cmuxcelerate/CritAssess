import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../assessment_data/assessment.service';
import { Question } from '../../../assessment_data/assessment_classes/question';

@Component({
  selector: 'app-review-navigation',
  templateUrl: './review-navigation.component.html',
  styleUrls: ['./review-navigation.component.css']
})
export class ReviewNavigationComponent implements OnInit {
	// Contains all the indices of questions from assessment, plus scenario and question indices
		// Each entry is a list of the form: [scenarioNum, questionNum]
	questions: Array<any>;
	get assessment() {
		return this.assessmentService.assessment;
	}

	// index within question[] array of current question
	get currentIndex() {
		return this.assessment.flatIndex;
	}


	goToQuestion(scenarioNum: number, questionNum: number, index: number) {
		this.assessment.scenario = scenarioNum;
		this.assessment.question = questionNum;
		this.assessment.flatIndex = index;
	}

	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
		// Flatten list of questions into one list
			// Each entry looks like [scenarioNum, questionNum, questionObject]
		this.questions = new Array<any>();
		this.assessment.questionGroups.forEach((questionGroup, scenarioNum) => {
			questionGroup.forEach((question, questionNum) => {
				this.questions.push([scenarioNum, questionNum]);
			});
		});
	}

}
