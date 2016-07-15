import { bootstrap}  from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

window['Tether'] = 'something';

require('./index.html');
require("./styles.css");
require('font-awesome/scss/font-awesome.scss');
require('bootstrap/scss/bootstrap.scss');
require('bootstrap/dist/js/bootstrap.js');

class User {
  private _email: string = '';
  private _password: string = '';
    constructor(email: string) {
	  this._email = email;
    }
    public set password(pwd: string) {
      this._password = pwd;
    }
    public get password(): string {
      return this._password;
    }    
}

let user = new User('one@two.com');
user.password = 'somePass';
if (user.password) {
  console.log(user.password);
}

@Component({
  selector: 'our-app',
  template: `
<div class="header-meetup">Simplest App</div>
<div id="area-wrapper">
Font-Awesome Demo: <i class="fa fa-fw fa-bullhorn"></i>
<div id="area-divider"></div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Twitter Bootstrap Demo Button
</button>

</div>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  `
})
class OurApp {

}

bootstrap(OurApp);

