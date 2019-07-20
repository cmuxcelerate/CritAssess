import { KnowledgeComponent } from './assessment_classes/knowledgeComponent';
export const kcList = [
	new KnowledgeComponent
	(
			"1.2", 
			"Assessing priority / importance of product features", //Name of kc
			"You did a good job in accurately assessing the priority or importance of product features in a job scenario situated in a technical context and planning accordingly.", // When they do well
			"You could improve by focusing on how the factors weighing into your decision making align with your higher level goals" //When they do poorly
	),
	new KnowledgeComponent
	(
		"1.3",
		"Considering and valuing multiple perspectives",
		"You did a good job in addressing diverse perspectives from a variety of sources to qualify analysis and clearly justifying your own view while respecting views of others.",
		"You could improve by resisting the urge to assume that you are right when someone disagrees with you"
	),

	new KnowledgeComponent
	(
			"1.4",
			"Assessing priority / importance of multiple stakeholders’ perspectives or experiences",
			"You did a good job in rationally evaluating how other people's backgrounds and experience shape who's opinion is most valuable in a given situation.",
			"You could improve by considering how someone's role and experience aligns with the kind of opinion they are giving. Is this person an expert in the relevant field?"
	)
]