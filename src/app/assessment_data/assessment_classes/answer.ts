export class Answer {
	text: string;
	correct: boolean;
	partialCredit: number;
	selected: boolean;

	constructor(text: string, correct: boolean, partialCredit?: number) {
		this.text = text;
		this.correct = correct;
		this.selected = false; //Whether learner has chosen this answer
		if (partialCredit != undefined) {
			this.partialCredit = partialCredit;
		} else {
			this.partialCredit = 0;
		}
	}
}