import { bootstrap}  from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { OurApp } from './app/app.component.ts';

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

window['Tether'] = 'something';

require('font-awesome/scss/font-awesome.scss');
require('bootstrap/scss/bootstrap.scss');
require('bootstrap/dist/js/bootstrap.js');

class User {
	private _email: string = '';
	private _password: string = '';
	
	constructor (email: string) {
		this._email = email;
	}
	
	public set password(pwd: string) {
		this._password = pwd;
	}
	
	public get password ():string {
		return this._password;
	}

}

let user = new User ("billy@microsoft.com");
user.password = 'somePassword';
if (user.password) {
	console.log(user.password);
}

bootstrap(OurApp);
