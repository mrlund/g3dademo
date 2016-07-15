import { provideRouter, RouterConfig } from '@angular/router';

import {LoginPage} from './pages/login-page/login-page';
import {MainPage} from './pages/main-page/main-page';

const routes: RouterConfig = [

    { path: 'login', component: LoginPage},
    { path: 'main', component: MainPage },
    { path: '', redirectTo: '/login',  pathMatch: 'full'}

];

export const appRouterProviders = [
    provideRouter(routes)
];