import { provideRouter, RouterConfig } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';

// import {MainPage} from './pages/main-page/main-page';

const routes: RouterConfig = [
    // { path: 'home', component: MainPage },
    { path: 'login', component: LoginPage },
    { path: '', component: LoginPage }
];

export const appRouterProviders = [
    provideRouter(routes)
];