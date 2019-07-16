import { Question } from './question';

export class Assessment {
	questionGroups: Question[][]; //Each questionGroup is a list of questions (for a given scenario)
	scenario: number; //Which scenario learner is currently on (starts at 0)
	question: number; //Which question within the scenario learner is currently on (starts at 0)
	confirmedAnswer: boolean; //Whether learner has hit 'confirm' on this question
	questionsAnswered: number; //How many questions have been answered so far
	constructor(questionGroups: Question[][]) {
		this.questionGroups = questionGroups;
		this.scenario = 6;
		this.question = 0;
		this.confirmedAnswer = false;
		this.questionsAnswered = 0;
	}


	// Returns total number of questions in assessment
	get questionCount(): number {
		let res = 0;
		this.questionGroups.forEach(questionGroup => {
			questionGroup.forEach(question => {
				res++;
			});
		});
		return res;
	}

	// Returns dictionary with scores & counts for each kc
		// e.g. 
		// {
				// kc1: {score: 4, count: 5} i.e. 4/5 on kc1
				// kc2: {score: 3, count: 3}
		// }
	get scorePerKC(): object {
		let res = {};
		// Loop through each group of questions (each scenario)
		this.questionGroups.forEach(questionGroup => {
			// Assign points for this question's score to each relevant knowledge component
			questionGroup.forEach(question => {
				// Every question counts towards total score
				if (!res.hasOwnProperty('totalScore')) {
					res['totalScore'] = {score: question.score, count: question.weight};
				} else {
					res['totalScore']['score'] += question.score;
					res['totalScore']['count'] += question.weight;
				}
				// Calculate question's contribution towards each of its knowledge components
					// Each question adds its full score toward each of its KC's
				question.kcs.forEach(kc => {
					if (!(res.hasOwnProperty(kc))) {
						res[kc] = {score: question.score, count: question.weight};
					} else {
						res[kc]['score'] += question.score;
						res[kc]['count'] += question.weight;
					}
				}); //End question.kcs.forEach()
			}); //End questionGroup.forEach()
		}); //End questionGroups.forEach()
		return res;
	} //End scorePerKC()
}