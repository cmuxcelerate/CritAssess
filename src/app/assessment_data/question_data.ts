import { Question } from './assessment_classes/question';
import { Answer } from './assessment_classes/answer';

export const questions: Question[] = [
	new Question(
		"mcq", //type of question
		"Where and why should we get down?", //question prompt
		// answers
		[
			new Answer("to business", false),
			new Answer("to defeat the huns", true),
			new Answer("get down, get down, get down, get down tonight", false)
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