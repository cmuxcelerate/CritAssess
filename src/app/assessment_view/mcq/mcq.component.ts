import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../assessment_data/assessment_classes/question';
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
	constructor() { }

	ngOnInit() {
	}

}
