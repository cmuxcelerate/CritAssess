import { Question } from './assessment_classes/question';
import { Answer } from './assessment_classes/answer';

export const questions: Question[] = [
	new Question(
		"mcq", //type of question
		"Question 1 of 2", //Header label 
		"Which of the following would be the best sequence of features to build, given the above constraints?", //question prompt
		// answers
		[
			new Answer("A, B, E", false),
			new Answer("F, E, B", true),
			new Answer("F, A, C", false),
			new Answer("B, E, F", false)
		],

		// KC's
		[
			"Weighing options",
			"Identifying Giving Reasons",
		],
		1, // weight (defaults to 1 if skipped)

	), // End Q1

	new Question(
		"mcq", //type of question
		"Question 2 of 2",
		"How now, brown cow?", //question prompt
		// answers
		[
			new Answer("how when?", false),
			new Answer("time is an illusion", true),
			new Answer("indeed.", true)
		],

		// KC's
		[
			"Weighing options",
			"Thoughtfulness",
		],

	), // End Q2
];