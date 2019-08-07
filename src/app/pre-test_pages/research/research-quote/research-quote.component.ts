import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-research-quote',
  templateUrl: './research-quote.component.html',
  styleUrls: ['./research-quote.component.css']
})
export class ResearchQuoteComponent implements OnInit {
	@Input() quote: string; //Full quote text
	@Input() attribution: string; //Person credited with quote
	constructor() { }

	ngOnInit() {
	}

}
