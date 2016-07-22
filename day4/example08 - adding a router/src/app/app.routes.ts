import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
