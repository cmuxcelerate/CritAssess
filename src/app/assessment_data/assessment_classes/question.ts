import { Answer } from './answer';
export class Question {
	type: string;
	// header: string;
	prompt: string;
	answers: Answer[];
	// studentAnswers: Boolean[]; //For each answer, whether that answer is selected
	weight: number; //Value of this question
	kcs: string[];

	constructor(type:string, prompt: string, answers:Answer[], kcs?: string[], weight?: number) {
		this.type = type;
		// this.header = header;
		this.answers = answers;
		this.prompt = prompt;
		if (this.weight != undefined) {
			this.weight = weight;
		} else {
			this.weight = 1; // Default weight = 1
		}
		if (kcs != undefined) {
			this.kcs = kcs;
		} else {
			kcs = new Array<string>();
		}
	}

	// returns current score on this question (based on selection)
	get score(): number {
		let score = 0;
		this.answers.forEach(answer => {
			switch (this.type) {
				case "mcq":
					if (answer.selected) {
						if (answer.correct) {
							score = this.weight;
						} else {
							score = answer.partialCredit;
						}
					}
					break;
				case "select-all":
					if (answer.correct == answer.selected) {
						score++;
					}
					//Give partial credit if wrong answer was selected
					else if (answer.selected) score += answer.partialCredit;
					score = score/this.answers.length * this.weight;
					break;
				default:
					console.log("default score");
					break;
			}
		});
		return score;
	}
}