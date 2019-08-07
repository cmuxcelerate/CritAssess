import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	minimumHeight: string; //Minimum height this component needs to fill the screen
	  constructor() { }

	  ngOnInit() {
		// min height is window - header - assessmentHeader - footer
		const height = window.innerHeight - 82 - 78;
		this.minimumHeight =  height + "px";
	  }

}
