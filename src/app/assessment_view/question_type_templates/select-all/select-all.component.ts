import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../assessment_data/assessment_classes/question';
import { AssessmentService } from '../../../assessment_data/assessment.service';
@Component({
  selector: 'app-select-all',
  templateUrl: './select-all.component.html',
  styleUrls: ['./select-all.component.css']
})
export class SelectAllComponent implements OnInit {

	@Input() question: Question;
	// One per answer in question, true if checked, false otherwise
	// answers: Array<boolean> = new Array<boolean>();

	// Alias for assessment service's assessment instance
	get assessment() {
		return this.assessmentService.assessment;
	}

	// Boolean whether any answer is selected
	get answerIsSelected() {
		let res = false;
		this.question.answers.forEach(answer => {
			if (answer.selected) {
				res = true;
			}
		});
		return res;
	}

	// Invert whether an answer is selected when a checkbox is presse
	onSelectionChange(answerIndex) {
		this.question.answers[answerIndex].selected = !this.question.answers[answerIndex].selected;
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
		}
	}

	logScore() {
		console.log(this.assessment.scorePerKC);
	}
	
	constructor(private assessmentService: AssessmentService) { }

	ngOnInit() {
		// // Initialize answers array
		// this.question.answers.forEach(answer => {
		// 	this.answers.push(false);
		// });
	}

}
