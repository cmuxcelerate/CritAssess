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
			"2.3", //ID
			"Assessing applicability of information and separating relevant and irrelevant information", //Description
			// Praise
			"You did a good job in  understanding information, making appropriate inferences, abstracting important factors under different scenarios and synthesizing ideas",
			// Advice
			"You could improve by paying more attention to the relationship between the given information and the scenario."
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