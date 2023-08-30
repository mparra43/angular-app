import { Component, Input } from '@angular/core';
import { FilmModel } from '@core/models/Films.model';
import { RouterLink } from '@angular/router';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';





@Component({
    selector: 'app-card-movie',
    templateUrl: './card-movie.component.html',
    styleUrls: ['./card-movie.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, RouterLink, NgClass]
})
export class CardMovieComponent {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() film:FilmModel = { adult: false,
    backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
    genre_ids: [16, 35, 10751, 14, 10749],
    id: 976573,
    original_language: "en",
    original_title: "Elemental",
    overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 2933.943,
    poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    name: "Tagesschau",
    release_date: "2023-06-14",
    title: "Elemental",
    video: false,
    vote_average: 7.8,
    vote_count: 1402, };

  constructor() { }

  ngOnInit(): void {
  }

  
}
