import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../assessment_data/assessment_classes/question';
import { AssessmentService } from '../../../assessment_data/assessment.service';
@Component({
	selector: 'app-mcq',
	templateUrl: './mcq.component.html',
	styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {

	@Input() question: Question;

	onSelectionChange(selectedText) {
		this.question.answers.forEach(answer => {
			answer.selected = (answer.text == selectedText);
		});
	}
	get assessment() {
		return this.assessmentService.assessment;
	}

	get answerIsSelected() {
		let res = false;
		this.question.answers.forEach(answer => {
			if (answer.selected) {
				res = true;
			}
		});
		return res;
	}

	// Confirms answer choice
	submitAnswer() {
		if (this.answerIsSelected) {
			this.assessment.confirmedAnswer = true;
			this.assessment.questionsAnswered++;
		}
	}

	// Goes to next question, if possible
	nextQuestion() {
		// If there is another question in this scenario, load it
		if (this.assessment.question < this.assessment.questionGroups[this.assessment.scenario].length - 1) {
			this.assessment.question++;
			this.assessment.confirmedAnswer = false;
		} 
		// Otherwise, if there is a next scenario, load it
		else if (this.assessment.scenario < this.assessment.questionGroups.length - 1) {
			this.assessment.question = 0;
			this.assessment.scenario++;
			this.assessment.confirmedAnswer = false;
		}

		else {
			this.assessment.done = true;
			console.log("Final score:");
			console.log(this.assessment.scorePerKC);
			console.log(this.assessment.top3KCs);
		}
	}
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
	}

}
