export class KnowledgeComponent {
	id: string;
	description: string;
	praise: string; // Text for when this is in user's top 3 skills
	advice: string; // When user needs improvement
	score: number; // %s correct on questions involving this KC


	constructor(id: string, description: string, praise: string, advice: string) {
		this.id = id;
		this.description = description;
		this.praise = praise;
		this.advice = advice;
	}
}