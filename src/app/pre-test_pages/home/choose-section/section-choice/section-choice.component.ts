import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-choice',
  templateUrl: './section-choice.component.html',
  styleUrls: ['./section-choice.component.css']
})
export class SectionChoiceComponent implements OnInit {

	@Input() section: string;
	@Input() scenarios: string;
	@Input() duration: string;
	@Input() selected: boolean;

	constructor() { }

	ngOnInit() {
	}

}
