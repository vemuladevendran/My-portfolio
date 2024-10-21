import { Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: AppShellComponent,
        // children: [
        //     {
        //         path: 'home',
        //         component: HomeComponent
        //     },
        //     {
        //         path: '**',
        //         redirectTo: '/home',
        //       },
        // ]
    }
];
