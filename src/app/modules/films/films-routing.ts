import { Routes } from '@angular/router';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmDetailPageComponent } from './pages/film-detail-page/film-detail-page.component';

export const filmsRoutes: Routes = [
  {
    path: '',
    component:FilmsPageComponent
  },
  { path: ':id', component: FilmDetailPageComponent },
];

