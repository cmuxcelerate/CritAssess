import { Question } from './question';

export class Assessment {
	questions: Question[];

	constructor(questions: Question[]) {
		this.questions = questions;
	}

	// Returns dictionary with scores & counts for each kc
		// e.g. 
		// {
				// kc1: {score: 4, count: 5} i.e. 4/5 on kc1
				// kc2: {score: 3, count: 3}
		// }
	get scorePerKC(): object {
		let res = {};
		// Assign points for this question's score to each relevant knowledge component
		this.questions.forEach(question => {
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
			});
		});
		console.log("Assessment Score:");
		console.log(res);
		return res;
	}
}