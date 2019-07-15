import { Question } from './assessment_classes/question';
import { Answer } from './assessment_classes/answer';

export const questions: Question[][] = [
	[ //Scenario 1 questions
		// S1Q1
		new Question(
			"mcq", //type of question
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

		), // End S1Q1
		// S1Q2
		new Question(
			"mcq", //type of question
			"What are the criteria you use when choosing the best solution?", //question prompt
			// answers
			[
				new Answer("Develop the most time-consuming functions first to make sure that the hardest-to-do ones could be done.", false),
				new Answer("Start with the high-priority functions that require the most time.", true),
				new Answer("Use the highest estimate of the required time as time estimate and try to balance the number of most time-consuming and least time-consuming functions.", true),
				new Answer("Develop the least time-consuming functions first to make sure that we complete as many functions as possible.", false)
			],

			// KC's
			[
				"Weighing options",
				"Thoughtfulness",
			],

		), // End Q2
	], //End Scenario 1

	// Scenario 2
	[
		// S2Q1
		new Question(
			"mcq",
			"Jackie suggests we choose Solution 1 over Solution 2. What might her priorities be?",
			// answers
			[
				new Answer("Requirement A > Requirement B > Requirement C > Requirement D", true),
				new Answer("Requirement D > Requirement C > Requirement B > Requirement A", false),
				new Answer("Requirement C > Requirement D > Requirement A > Requirement B", false),
				new Answer("Requirement D > Requirement B > Requirement C > Requirement A", false)
			],
			// KC's
			[
				"placeholder"
			]
		) //End S2Q1
	], //End Scenario 2

];