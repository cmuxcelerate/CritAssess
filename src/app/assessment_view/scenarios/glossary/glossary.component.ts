import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

	@Input() term: string; // Word being defined
	@Input() definition: string; // Text for pop-up glossary
	constructor() { }

	ngOnInit() {
	}

}
