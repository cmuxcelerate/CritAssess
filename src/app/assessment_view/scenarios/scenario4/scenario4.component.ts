import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component implements OnInit {
	minimumHeight: string; //Min height of scenario to fill page
	constructor() { }

	ngOnInit() {
		// min height is window - header - assessmentHeader - footer
		const height = window.innerHeight - 82 - 52 - 78;
		this.minimumHeight =  height + "px";
	}

}
