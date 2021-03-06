import { Question } from './question';
import { KnowledgeComponent } from './knowledgeComponent';
import { kcList } from '../kcList';
export class Assessment {
	questionGroups: Question[][]; //Each questionGroup is a list of questions (for a given scenario)
	scenario: number; //Which scenario learner is currently on (starts at 0)
	question: number; //Which question within the scenario learner is currently on (starts at 0)
	confirmedAnswer: boolean; //Whether learner has hit 'confirm' on this question
	questionsAnswered: number; //How many questions have been answered so far
	done: boolean = false; //Whether test is complete
	reviewing: boolean = false; //Whether user is reviewing feedback
	flatIndex: number = 0; //Index of current question when all are flattened into one list
	totalScore: number = 0;
	constructor(questionGroups: Question[][]) {
		this.questionGroups = questionGroups;
		this.scenario = 0;
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

	get top3KCs(): Array<KnowledgeComponent> {
		let res = new Array<KnowledgeComponent>();
		// Sort kc list
		kcList.sort(function sortKCsByScore(kc1, kc2) {
			return kc2.score - kc1.score;
		});
		res.push(kcList[0], kcList[1], kcList[2]);
		return res;
	}

	get bottom3KCs(): Array<KnowledgeComponent> {
		let res = new Array<KnowledgeComponent>();
		// Sort kc list
		kcList.sort(function sortKCsByScore(kc1, kc2) {
			return kc2.score - kc1.score;
		});
		res.push(kcList[kcList.length - 1], kcList[kcList.length - 2], kcList[kcList.length - 3]);
		return res;
	}

	// get top3KCs(): Array<KnowledgeComponent> {
	// 	let res = new Array<KnowledgeComponent>();
	// 	let topScores = [0, 0 , 0]
	// 	let topIds = [kcList[0].id, kcList[0].id, kcList[0].id];
	// 	let scores = this.scorePerKC;
	// 	for (let kcId in scores) {
	// 		// Find minimum among current top scores
	// 		let lowestTop = 100;
	// 		let lowestIndex = null;
	// 		topScores.forEach((score, scoreIndex) => {
	// 			if (score < lowestTop) {
	// 				lowestIndex = scoreIndex;
	// 				lowestTop = score;
	// 			}
	// 		});
	// 		// If current kc score is bigger than lowest top score, add this kc to top 3
	// 		if (scores[kcId].score/scores[kcId].count > lowestTop) {
	// 			topScores.splice(lowestIndex, 1);
	// 			topIds.splice(lowestIndex, 1);
	// 			topScores.push(scores[kcId].score/scores[kcId].count);
	// 			topIds.push(kcId);
	// 		}
	// 	}

	// 	// Add top 3 kc's to list
	// 	kcList.forEach(kc => {
	// 		if (topIds.indexOf(kc.id) > -1) res.push(kc);
	// 	});

	// 	return res;
	// }

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

		// Assign total score
		this.totalScore = res['totalScore'].score/res['totalScore'].count;

		// assign score to each kc in kcList
		console.log("writing scores into each kc");
		kcList.forEach(kc => {
			if (res.hasOwnProperty(kc.id)) {
				kc.score = res[kc.id]['score']/res[kc.id]['count'];
			}
			else {
				kc.score = 0;
			}
		});
		console.log(kcList);
		return res;
	} //End scorePerKC()
}