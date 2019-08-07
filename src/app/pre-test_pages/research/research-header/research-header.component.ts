import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-research-header',
  templateUrl: './research-header.component.html',
  styleUrls: ['./research-header.component.css']
})
export class ResearchHeaderComponent implements OnInit {

	@Input() txt: string; //Header text
	constructor() { }

	ngOnInit() {
	}

}
