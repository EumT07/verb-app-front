import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.routes')
            .then((r)=>r.routes)
    },
    {
        path: "auth",
        loadChildren: () => import('./auth/auth.routes')
            .then((r)=> r.routes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes')
            .then((r) => r.routes)
    },
    {
        path: 'error',
        loadChildren: () => import('./shared/layout/errors/error.routes').then((r)=>r.routes)
    }
    ,
    {
        path: '**',
        redirectTo: '/error/pagenotfound',
        pathMatch: 'full'
    }
];
