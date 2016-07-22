import { Component} from '@angular/core';
import { Router }           from '@angular/router';

import { Modal } from '../modal';

@Component({
  selector: 'home',
  directives: [Modal],
  templateUrl: 'app/home/home.html'
})
export class HomeComponent{

}
