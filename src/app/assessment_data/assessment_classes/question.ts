import { Answer } from './answer';
export class Question {
	type: string;
	prompt: string;
	answers: Answer[];
	// studentAnswers: Boolean[]; //For each answer, whether that answer is selected
	weight: number; //Value of this question

	constructor(type:string, weight: number, prompt: string, answers:Answer[]) {
		this.answers = answers;
		this.weight = weight;
		this.prompt = prompt;
	}

	// returns current score on this question (based on selection)
	get score(): number {
		let score = 0;
		this.answers.forEach(answer => {
			if (answer.correct == answer.selected) {
				score++;
			}
			//Give partial credit if wrong answer was selected
			else if (answer.selected) score += answer.partialCredit;
		});
		score = score/this.answers.length * this.weight;
		return score;
	}
}