import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmDetailPageComponent } from './pages/film-detail-page/film-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component:FilmsPageComponent
  },
  { path: ':id', component: FilmDetailPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
