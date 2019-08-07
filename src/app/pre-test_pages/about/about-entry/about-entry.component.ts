import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-entry',
  templateUrl: './about-entry.component.html',
  styleUrls: ['./about-entry.component.css']
})
export class AboutEntryComponent implements OnInit {

	@Input() name: string; //Full name
	@Input() img: string; //path to headshot img
	@Input() role: string;
	@Input() backgroundText: string;
	
	constructor() { }

	ngOnInit() {
	}

}
