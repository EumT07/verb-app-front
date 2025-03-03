import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'pagenotfound',
        loadComponent: () => import('./pages/page-not-found/page-not-found.component'),
    },
    {
        path: "server",
        loadComponent: () => import('./pages/server-error/server-error.component')
    },
    // {
    //     path: "session",
    //     loadComponent: () => import('./pages/session-error/session-error.component')
    // },
    // {
    //     path: 'token',
    //     loadComponent: () => import('./pages/token-error/token-error.component')
    // }
]