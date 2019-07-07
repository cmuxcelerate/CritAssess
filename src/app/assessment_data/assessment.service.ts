import { Injectable } from '@angular/core';
import { Assessment } from './assessment_classes/assessment';
import { questions } from './question_data';

// import { Question } from './assessment_classes/question';
@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
	assessment: Assessment;
	constructor() { 
		this.assessment = new Assessment(questions);
	}
}
