import { LoginPage } from './../pages/login-page/login-page';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainPage} from '../pages/main-page/main-page';
import {ForgotPassword} from '../pages/forgot-password-page/forgot-password-page';

const routes: Routes = [
    { path: 'login', component: LoginPage},
    { path: 'main', component: MainPage },
    { path: 'forget-password', component: ForgotPassword },
    { path: 'access_token', component: LoginPage},
    { path: '', redirectTo: '/main', pathMatch: 'full'}

];

export const appRouterProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
