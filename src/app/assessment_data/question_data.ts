import { Question } from './assessment_classes/question';
import { Answer } from './assessment_classes/answer';

export const questions: Question[] = [
	new Question(
		"multiple-choice",
		1,
		"Where and why should we get down?",
		[
			new Answer("to business", false),
			new Answer("to defeat the huns", true),
			new Answer("get down, get down, get down, get down tonight", false)
		]
	)
];