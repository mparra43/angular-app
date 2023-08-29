import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmModel } from '@core/models/Films.model';
import { FilmService } from '@modules/films/services/film.service';


@Component({
  selector: 'app-film-detail-page',
  templateUrl: './film-detail-page.component.html',
  styleUrls: ['./film-detail-page.component.css']
})
export class FilmDetailPageComponent implements OnInit {
  text = 'Este es el texto del tooltip';
  film: string = '';
  filmDetails: any = {};
  showRatingForm = false;
  comment: string = '';
  rating: number | null = null;

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.film = params['id'];
      console.log(this.film)
      this.loadFilmDetails(this.film);
    });
  }

  async loadFilmDetails(id: string): Promise<any> {
    try {
      this.filmDetails = await this.filmService.getFilmDetails$(id).toPromise();
    } catch (error) {
    }
  }
  toggleRatingForm(): void {
    this.showRatingForm = !this.showRatingForm;
  }

  setRating(rating: number): void {
    this.rating = rating;
  }
  rateFile(data: any): void {
    console.log(data);
    this.toggleRatingForm()
  }
 
}
