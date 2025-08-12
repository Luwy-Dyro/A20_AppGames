import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { Onepage1Component } from './Pages/Home/onepage-1/onepage-1.component';
import { Onepage2Component } from './Pages/Home/onepage-2/onepage-2.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./layout/layout.route').then((mod) => mod.MP_ROUTES),
    },

    { path: 'onepage-1', component: Onepage1Component },
    { path: 'onepage-2', component: Onepage2Component },
];
