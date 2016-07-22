import { Component } from '@angular/core';

import { Modal } from './modal/modal.component.ts';

require("./styles.css");

@Component({
  selector: 'our-app',
  directives: [Modal],
  templateUrl: './app/app.html'
})
export class OurApp {

}