import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home/home.component';
import { AuthComponent } from './pages/main/auth/auth.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'register',
        component: AuthComponent, 
        data: { isRegister: true },
    },
    {
        path: 'login',
        component: AuthComponent, 
        data: { isRegister: false },
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'

    },
];
