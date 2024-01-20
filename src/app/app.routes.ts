import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'app-home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'valorviaje',
    loadComponent: () => import('./paginas/valorviaje/valorviaje.page').then( m => m.ValorviajePage)
  },
  {
    path: 'destinos',
    loadComponent: () => import('./paginas/destinos/destinos.page').then( m => m.destinos)
  },
 


];
