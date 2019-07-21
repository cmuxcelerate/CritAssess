import { Component, OnInit, Input } from '@angular/core';
import { KnowledgeComponent } from '../../../assessment_data/assessment_classes/knowledgeComponent';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

	@Input() kc: KnowledgeComponent;
	@Input() isTopSkill: boolean;

	constructor() { }

	ngOnInit() {
	}

}
