import {  Routes } from '@angular/router';


export const homeRoutes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('@modules/films/films-routing').then(m => m.filmsRoutes)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites-routing').then(m => m.favoritesRoutes)
  },
  {
  path: '**',
  redirectTo:'/films'
  }

];


