import { Component} from '@angular/core';

import { Modal } from '../modal';

@Component({
  selector: 'home-random',
  directives: [Modal],
  templateUrl: 'app/home/home.template.html'
})
export class HomeComponent{

}
