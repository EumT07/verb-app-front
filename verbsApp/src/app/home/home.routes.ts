import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component'),
    },
    // {
    //     path: 'about',
    //     loadComponent: () => import('./pages/about/about.component')
    // },
    {
        path: 'team',
        loadComponent: () => import('./pages/team/team.component')
    },
    // {
    //     path: 'terms-and-conditions',
    //     loadComponent: () => import('./pages/terms/terms.component')
    // },
    // {
    //     path: 'privacy-policy',
    //     loadComponent: () => import('./pages/policy/policy.component')
    // }

]