import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-wheel',
  templateUrl: './progress-wheel.component.html',
  styleUrls: ['./progress-wheel.component.css']
})
export class ProgressWheelComponent implements OnInit {

	@Input() percent: number;
	@Input() radius: number;
	@Input() isTopSkill: boolean;
	arc: number;
	circumference: number;
	constructor() { }

	ngOnInit() {
		this.circumference = Math.PI*2*this.radius;
		this.arc = (100-this.percent)/100*this.circumference;
	}

}
