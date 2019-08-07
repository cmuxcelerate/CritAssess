import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directions-page',
  templateUrl: './directions-page.component.html',
  styleUrls: ['./directions-page.component.css']
})
export class DirectionsPageComponent implements OnInit {
	minimumHeight: string; //Minimum height this component needs to fill the screen
	constructor() { }

	ngOnInit() {
		// min height is window - header - assessmentHeader - footer
		const height = window.innerHeight - 82 - 52 - 78;
		this.minimumHeight =  height + "px";
	}

}
