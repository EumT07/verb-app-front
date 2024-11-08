import { Routes } from "@angular/router";

export const routes:Routes = [
    {
        path:'signup',
        loadComponent: () => import('./components/register/register.component')
    },
    {
        path:'signin',
        loadComponent: () => import('./components/login/login.component')
    },
    {
        path:'recovery-password',
        loadComponent: () => import('./components/recovery-pass/recovery-pass.component')
    }
]