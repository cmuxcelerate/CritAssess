import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-section',
  templateUrl: './choose-section.component.html',
  styleUrls: ['./choose-section.component.css']
})
export class ChooseSectionComponent implements OnInit {
	minimumHeight: string; //Minimum height of this page (prevents whitespace at page bottom)
	constructor() { }

	ngOnInit() {
		// min height is window - header - footer
		const height = window.innerHeight - 52 - 78;
		this.minimumHeight =  height + "px";
	}

}
