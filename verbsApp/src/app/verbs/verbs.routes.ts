import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./pages/verbs/verbs.component')
    },
    {
        path: "regular",
        loadComponent: () => import('./pages/regular-verbs/regular-verbs.component')
    },
    {
        path: "irregular",
        loadComponent: () => import('./pages/irregular-verbs/irregular-verbs.component')
    }

]