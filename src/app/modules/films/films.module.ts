import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { SharedModule } from '@shared/shared.module';
import { FilmDetailPageComponent } from './pages/film-detail-page/film-detail-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilmsPageComponent,
    FilmDetailPageComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule,
    FormsModule,
    
  ]
})
export class FilmsModule { }
