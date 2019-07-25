import { KnowledgeComponent } from './assessment_classes/knowledgeComponent';
export const kcList = [
	new KnowledgeComponent
	(
			"1.2", //ID of KC
			"Assessing priority / importance of product features", //Name of KC
			// Praise for when it's a top skill
			"You did a good job in accurately assessing the priority or importance of product features in a job scenario situated in a technical context and planning accordingly. ", // When they do well
			// Advice for when it's a bottom skill
			"You could improve by thinking more thoroughly of the factors that contribute to different priority levels of features, e.g. cost, time, benefits, consequences if failed." //When they do poorly
	),
	
	new KnowledgeComponent
	(
		"1.3", //ID
		"Considering and valuing multiple perspectives", //Description
		// Praise
		"You did a good job in addressing diverse perspectives from a variety of sources to qualify analysis and clearly justifying your own view while respecting views of others.",
		// Advice
		"You could improve by listening to others’ opinions with an open mind and learning from other people’s ideas to make  better-informed decisions."
	),

	new KnowledgeComponent
	(
			"1.4", //ID
			"Assessing priority / importance of multiple stakeholders’ perspectives or experiences", //Description
			// Praise
			"You did a good job in considering the role of different individuals in a job scenario situated in a technical context and assessing priority based not only on their roles but also their reasons for a given issue. ",
			// Advice
			"You could improve by considering people’s roles, domain expertise, experience, and their reasons for a given issue in assessing the priority or importance of multiple stakeholders’ perspectives."
	),

	new KnowledgeComponent
	(
			"1.6", //ID
			"Categorizing relevant information", //Description
			// Praise
			"You did a good job in understanding and appropriately formulating distinctions for describing and characterizing information.",
			// Advice
			"You could improve by digging more thoroughly into the reasons that form the distinctions between different pieces of information."
	),

	new KnowledgeComponent
	(
			"1.7", //ID
			"Clarifying by asking relevant and penetrating questions to clarify facts, concepts, and relationships", //Description
			// Praise
			"You did a good job in identifying and probing into the most relevant concerns by asking relevant and penetrating questions.",
			// Advice
			"You could improve by not making assumptions based on personal experience or bias and analyzing different aspects of a given scenario."
	),

	new KnowledgeComponent
	(
			"2.1", //ID
			"Determining whether a given statement is fact, opinion or doubtful assumption", //Description
			// Praise
			"You did a good job in judging whether statement provided is a theory, belief, fact, or assumption based on the given information",
			// Advice
			"You could improve by being more cautious in identifying pre-assumptions, opinionated descriptions and truthhold facts."
	),

	new KnowledgeComponent
	(
			"2.2", //ID
			"Determining whether information supports a position", //Description
			// Praise
			"You did a good job in determining whether certain information is in support or opposition of a particular question, issue, theory, hypothesis, or statement.",
			// Advice
			"You could improve by paying more attention to the logical relationship between an argument and its supporting evidence."
	),

	new KnowledgeComponent
	(
			"2.3", //ID
			"Assessing applicability of information and separating relevant and irrelevant information", //Description
			// Praise
			"You did a good job in  understanding information, making appropriate inferences, abstracting important factors under different scenarios and synthesizing ideas",
			// Advice
			"You could improve by paying more attention to the relationship between the given information and the scenario."
	),

	new KnowledgeComponent
	(
			"3.1", //ID
			"Weighing pros and cons of given solutions", //Description
			// Praise
			"You did a good job in identifying and justifying the strengths and weaknesses of given solutions.",
			// Advice
			"You could improve by looking more into the strengths and tradeoffs in different solutions"
	),

	new KnowledgeComponent
	(
			"3.2", //ID
			"Arriving at the best conclusion based on given evidence", //Description
			// Praise
			"You demonstrated consistent proficiency in arriving at the best conclusion under given conditions.",
			// Advice
			"You could improve by displaying unity and coherence in using logic and reason to make the best informed decision."
	),

]