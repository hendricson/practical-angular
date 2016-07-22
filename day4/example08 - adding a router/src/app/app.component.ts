import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

require("./styles.css");

@Component({
  selector: 'our-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/app.html'
})
export class OurApp {
	title = 'Our App';
}


