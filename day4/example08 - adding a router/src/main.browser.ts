import { bootstrap}  from '@angular/platform-browser-dynamic';

/*
* App Component
* our top level component that holds all of our components
*/
import { OurApp } from './app';
import { appRouterProviders }   from './app/app.routes';

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

window['Tether'] = 'something';

require('font-awesome/scss/font-awesome.scss');
require('bootstrap/scss/bootstrap.scss');
require('bootstrap/dist/js/bootstrap.js');

bootstrap(OurApp, [
  appRouterProviders
]);

