import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'welcome',
        loadChildren: () =>
            import('@portfolio-app/shell').then(
                (res): Route[] => res.shellRoutes
            ),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('@portfolio-app/projects-shell').then(
                (res): Route[] => res.projectsShellRoutes
            ),
    },
    {
        path: 'positions',
        loadChildren: () =>
            import('@portfolio-app/positions-shell').then(
                (res): Route[] => res.positionsShellRoutes
            ),
    },
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: 'welcome'
    },
];
