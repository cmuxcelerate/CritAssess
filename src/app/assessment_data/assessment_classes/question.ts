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
		console.log("\n\nScoring question: " + this.prompt);
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
					console.log("checking answer: " + answer.text);
					if (answer.correct == answer.selected) {
						console.log("correct answer");
						score++;
					}
					//Give partial credit if wrong answer was selected
					else if (answer.selected) score += answer.partialCredit;
					break;
				default:
					console.log("default score");
					break;
			}
		});
		console.log("score after scoring each answer before division: " + score);
		score = score/this.answers.length * this.weight;
		console.log("final quesiton score " + score);
		return score;
	}
}