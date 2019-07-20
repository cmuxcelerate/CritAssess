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
				"1.2",
				"1.3",
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
				"1.3",
				"1.2",
			],

		), // End S1Q2
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
				"1.2"
			]
		), //End S2Q1

		// S2Q2
		new Question(
			"select-all",
			"Justify the reason for your choice in Question 1 : (Select all that apply)",
			// answers
			[
				new Answer("Because Solution 1 has a higher score than Solution 2 in Requirement A", true),
				new Answer("Because Solution 2 has a higher score than Solution 1 in Requirement C", false),
				new Answer("Because Solution 1 has a higher score in Requirement D than it does in Requirement B", false),
				new Answer("Because Solution 2 has a higher score in Requirement D than it does in Requirement C", true),
			],
			// KC's
			[
				"1.3"
			]
		) //End S2Q2
	], //End Scenario 2

	// Secnario 3
	[
		// S3Q1
		new Question(
			"select-all",
			"The resources you have at hand only allow you to implement 5 out of the 9 features. According to the information provided above, which 5 features would you choose?",
			// answers
			[
				new Answer("Upload Project Proposal", true),
				new Answer("Define Learning Goals", true),
				new Answer("Set Weekly Goals", true),
				new Answer("Upload Daily Progress", false),
				new Answer("Add Collaborators", false),
				new Answer("Make Audio Comments", false),
				new Answer("View Achievement Visualization", false),
				new Answer("Upload Self-reflection", true),
				new Answer("Receive a Detailed Achievement Report", true)
			],
			// KC's
			[
				"1.3"
			]
		), //End S3Q1
		// S3Q2
		new Question(
			"select-all",
			"What would be the criteria that helped you make a decision? (Select All that Apply)",
			// answers
			[
				new Answer("Since we are building a minimum viable product, we need to include the most common features that products of this kind should have.", true),
				new Answer("We should include every feature that is not in our competitors’ products to differentiate our product.", false),
				new Answer("We should prioritize users’ opinion over buyers’ opinions, because we want to maximize our product’s usability for our end users.", false),
				new Answer("We should include “Upload Self-Reflection” because it has been proven by research that this would help improve learners’ performance”", true),
				new Answer("We should include “Upload Daily Progress” because daily progress would be useful for the teachers", false),
				new Answer("We should include “Add Weekly Progress” because while talking to students and teachers, it was found that this feature would be helpful for both these stakeholders.", true),
				new Answer("We should include “Add collaborators” since none of our competitors have this feature.", false),
				new Answer("We should include “Make Audio Comments” since it would save the teachers some time for grading.", false)
			],
			// KC's
			[
				"1.2"
			]
		) //End 32Q2
	], //End Scenario 3

	// Scenario 4
	[
		// S4Q1
		new Question(
			"select-all",
			"Out of the given questions, which of these would be useful? (Select All that Apply)",
			// answers
			[
				new Answer("How did the company determine whether it should have a messaging feature?", false),
				new Answer("How are you measuring usage of the messaging feature?", true),
				new Answer("Over what time period has the usage of the messaging feature dropped?", true),
				new Answer("How does the messaging feature work?", false),
				new Answer("Which demographics use the messaging feature most?", false),
				new Answer("Has the change in usage differed across demographics?", true),
			],
			// KC's
			[
				"placeholder"
			]
		), //End S4Q1
	], //End Scenario 4

	// Scenario 5
	[
		// S5Q1
		new Question(
			"mcq",
			"According to the information provided above, which strategy would you choose towards fixing the bug for right now and why?",
			// answers
			[
				new Answer("The 100% solution because the 98% good solution still has a slight chance of causing customer downtime. We should do as best as we could at no matter what price.", false),
				new Answer("The 98% solution, as fixing the bug to be 100% good takes much longer time than 98% good and it’s urgent to launch a new feature to face the changing competition needs, it’s wise to choose the 98% solution for now.", true),
				new Answer("Leave it there and focus on feature building, since the bug has been there since the first release and has been triggered only once, it’s not on the very urgent. Therefore, we could set it aside and focus on new feature building first.", false),
			],
			// KC's
			[
				"1.4"
			]
		), //End S5Q1
	], // End Scenario 5

	// Scenario 6
	[
		// S6Q1
		new Question(
			"mcq",
			"What would be the best solution in this situation?",
			// answers
			[
				new Answer("Discuss with your colleagues, trying to figure out a way in 2 days that can improve the efficiency and if necessary, transferring the projects to other people.", false),
				new Answer("Use agile development process, update your client periodically in these 2 days before the demo show to ensure their acceptance of our changing demo idea.", false),
				new Answer("Discuss a temporary solution with your manager, making a prototype automation function on the demo show to let the client get the gist of how everything works.", true),
				new Answer("Push back to high quality, with the risk of leaving the task unfinished, because what’s showing to the client should represent the highest standards of quality of your company.", false)
			],
			// KC's
			[
				"1.4"
			]
		), // End S6Q1

		// S6Q2
		new Question(
			"mcq",
			"If given more time, which strategy do you think is the most effective long-term solution to improve future work flow with your client?",
			// answers
			[
				new Answer("Set small goals in advance, determine the expected completion time and maximum completion time, and strictly stick to your original plan in all circumstances.", false),
				new Answer("Allocate more resources to speed up the progress, or postpone the deadline when the client has unreasonable expectations.", false),
				new Answer("Convince your client with data and logic that it is not to their benefit to make changes to their request.", false),
				new Answer("Periodically update your client with your latest progress to exchange views, because the demand may change over time, short sprints can help with acceptance and immediate change rather than wait until the last minute.", true)
			],
			// KC's
			[
				"1.3"
			]
		), // End S6Q2
	], // End Scenario 6

	// Scenario 7
	[
	// S7Q1
		new Question(
			"mcq",
			"If you were to decide, would you encourage the technical team to implement the more advanced algorithm or not? What is your best reason?",
			// answers
			[
				new Answer("I would not encourage the technical team to pursue the technical advancement at this moment because what they are doing builds more complexity into the sales process and is not going to be beneficial to the company as a whole.", false, .5),
				new Answer("I would not encourage the technical team to pursue the technical advancement at this moment. Instead, I would schedule a meeting between all 3 groups with the aim of getting them on the same page with one another as to what is most needed for the company now.", true),
				new Answer("I would encourage the technical team to pursue the technical advancement, because the complex model makes the perfect prediction.", false),
				new Answer("I would encourage the technical team to pursue the technical advancement and ask the sales team to try to come up with a different interpretation of the results generated by the advanced algorithm.", false)
			],
			// KC's
			[
				"1.2"
			]
		), // End S7Q1
	], // End Scenario 7
];