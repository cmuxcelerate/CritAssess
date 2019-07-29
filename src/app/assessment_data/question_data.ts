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
			// Feedback
			"Both finishing time and priority are important factors in deciding which functions to include and in what sequence. It is not a wise idea to use the lowest or highest time bounds as time estimates. Functions with the highest priority should be scheduled first to ensure completion on time.",
			// KC's
			[
				"2.3",
				"2.4",
				"3.1",
				"3.2"
			],
			1, // weight (defaults to 1 if skipped)

		), // End S1Q1
		// S1Q2
		new Question(
			"mcq", //type of question
			"What criteria did you use when choosing the best solution?", //question prompt
			// answers
			[
				new Answer("Develop the most time-consuming functions first to make sure that the hardest-to-do ones could be done.", false),
				new Answer("Start with the high-priority functions that require the most time.", true),
				new Answer("Use the highest estimate of the required time as the time estimate and try to balance the number of most time-consuming and least time-consuming functions.", false),
				new Answer("Develop the least time-consuming functions first to make sure that we complete as many functions as possible.", false)
			],
			// Feedback
			"Both finishing time and priority are important factors in deciding which functions to include and in what sequence. It is not a wise idea to use the lowest or highest time bounds as time estimates. Functions with the highest priority should be scheduled first to ensure completion on time.",
			// KC's
			[
				"1.6",
				"2.2",
				"2.3"
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
			// Feedback
			"Because Jackie chose solution 1, we know that solution 1 should have a higher score than solution 2 in the requirements she cares about most. While we don’t know for certain whether Jackie values Requirement A or Requirement B more, we know that she must prioritize these two more than Requirements B or C because Solution 1 has the higher score in both Requirement A and Requirement B.",
			// KC's
			[
				"1.2",
				"2.3",
				"2.4",
				"3.1"
			]
		), //End S2Q1

		// S2Q2
		new Question(
			"select-all",
			"Justify the reason for your choice in Question 1 (Select All that Apply):",
			// answers
			[
				new Answer("Because Solution 1 has a higher score than Solution 2 in Requirement A", true),
				new Answer("Because Solution 2 has a higher score than Solution 1 in Requirement C", false),
				new Answer("Because Solution 1 has a higher score in Requirement D than it does in Requirement B", false),
				new Answer("Because Solution 2 has a higher score in Requirement D than it does in Requirement C", true),
			],
			// Feedback
			"Because Jackie chose solution 1, we know that solution 1 should have a higher score than solution 2 in the requirements she cares about most. While we don’t know for certain whether Jackie values Requirement A or Requirement B more, we know that she must prioritize these two more than Requirements B or C because Solution 1 has the higher score in both Requirement A and Requirement B.",
			// KC's
			[
				"1.2",
				"2.2",
				"2.3",
				"2.4",
				"3.1"
			]
		) //End S2Q2
	], //End Scenario 2

	// Secnario 3
	[
		// S3Q1
		new Question(
			"select-all",
			"The resources you have at hand only allow you to implement 5 out of the 9 features. According to the information provided, which 5 features would you choose? (Select All that Apply)",
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
			// Feedback
			"It is better to include “Upload self-reflection” than “Add collaborators” since it has been proven by research (stronger evidence) that adding “Upload self-reflection” would improve student performance.",
			// KC's
			[
				"1.2",
				"1.3",
				"1.4",
				"1.6",
				"2.1",
				"2.3",
				"3.1",
				"3.2"
			]
		), //End S3Q1
		// S3Q2
		new Question(
			"select-all",
			"Which criteria helped you make a decision? (Select All that Apply)",
			// answers
			[
				new Answer("Since we are building a minimum viable product, we need to include the most common features that products of this kind should have.", true),
				new Answer("We should include every feature that is not in our competitors’ products to differentiate our product.", false),
				new Answer("We should include “Upload Self-Reflection” because it has been proven by research that this would help improve learners’ performance”", true),
				new Answer("We should include “Upload Daily Progress” because daily progress would be useful for the teachers", false),
				new Answer("We should include Set Weekly Goals because while talking to students and teachers, it was found that this feature would be helpful for both these stakeholders.", true),
			],
			// Feedback
			"It is better to include “Upload self-reflection” than “Add collaborators” since it has been proven by research (stronger evidence) that adding “Upload self-reflection” would improve student performance.",
			// KC's
			[
				"1.3",
				"1.4",
				"2.2",
				"2.3",
				"2.4"
			]
		) //End 32Q2
	], //End Scenario 3



	// Scenario 5
	[
		// S5Q1
		new Question(
			"mcq",
			"According to the information provided above, which strategy would you choose towards fixing the bug for right now and why?",
			// answers
			[
				new Answer("The 100% solution because the 98% good solution still has a slight chance of causing customer downtime. We should do our very best no matter the price.", false),
				new Answer("The 98% solution, because fixing the bug 100% takes much longer than the 98% good solution and it’s urgent to launch a new feature to face the changing competition needs.", true),
				new Answer("Leave it there and focus on feature building. The bug has been there since the first release and has been triggered only once, so it’s not on the very urgent. Therefore, we can set it aside and focus on new feature building first.", false),
			],
			// Feedback
			"Currently it is wiser to choose the 98% good solution because it both addresses fixing the bug as well as saving 1.5 weeks to complete building the new feature. Although there would still be a risk, the risk would be smaller and it could always be fixed to 100% good later.",
			// KC's
			[
				"2.2",
				"2.4",
				"3.1",
				"3.2"
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
				new Answer("Discuss with your colleagues, trying to figure out a way to improve the efficiency in 2 days. If necessary, transfer the projects to other people.", false),
				new Answer("Using an agile development process, update your client periodically in these 2 days before the demo show to ensure their acceptance of our changing demo idea.", false),
				new Answer("Discuss a temporary solution with your manager: to make a prototype automation function on the demo show to let the client get the gist of how everything would work without actually building the function.", true),
				new Answer("Push back on your manager's request, with the risk of leaving the task unfinished, because what’s shown to the client should represent the highest standard of quality of your company.", false)
			],
			// Feedback
			"With pressing time, it is wiser to come up with a prototype solution. Other choices besides choice (A) have either the possibility of missing the deadline or finish with unsatisfactory quality.",
			// KC's
			[
				"2.2",
				"2.4",
				"3.1",
				"3.2"
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
				new Answer("Convince your client with data and logic that it is not to their benefit to change their request.", false),
				new Answer("Periodically update your client with your latest progress to exchange views. Because the demand may change over time, short sprints can help with acceptance and making immediate changes.", true)
			],
			// Feedback
			"It’s a widely-adopted practice to periodically check in with client to update progress and exchange views to make sure you are on the same page.",
			// KC's
			[
				"2.2",
				"2.4",
				"3.1",
				"3.2"
			]
		), // End S6Q2
	], // End Scenario 6

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
				// Feedback
			"The correct answers are (B), (C) and (F). (A) is a little bit out of scope for a technical person. (B), (C), (F) help understand the situation better as they probe into more details from the perspectives of usage measurement, user demographics that have the potential of revealing the reasons of dropping usage. The answers to (D),(E) don’t lend insights into why the use of this feature is dropping.",

			// KC's
			[
				"1.2",
				"1.7",
				"2.3",
				"2.4"
			]
		), //End S4Q1
	], //End Scenario 4
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
			// Feedback
			"Since there is a conflict within the three teams about whether to implement the algorithm, it would be best if all the three teams were to meet and discuss about the potential complications and then decide on a solution which fits all rather than just fitting some of the teams.",
			// KC's
			[
				"1.3",
				"1.4",
				"2.2",
				"2.4",
				"3.1",
				"3.2"
			]
		), // End S7Q1
	], // End Scenario 7
];