import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./public-pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./public-pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./public-pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
    },
    {
        path: 'experience',
        loadComponent: () => import('./public-pages/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'education',
        loadComponent: () => import('./public-pages/education/education.component').then(m => m.EducationComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./public-pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    }
];
