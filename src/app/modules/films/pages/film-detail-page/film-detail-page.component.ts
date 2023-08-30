import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmModel } from '@core/models/Films.model';
import { FilmService } from '@modules/films/services/film.service';
import { RatingFormComponent } from '../../../../shared/components/rating-form/rating-form.component';
import { ListHeaderComponent } from '../../../../shared/components/list-header/list-header.component';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-film-detail-page',
    templateUrl: './film-detail-page.component.html',
    styleUrls: ['./film-detail-page.component.css'],
    standalone: true,
    imports: [NgIf, DialogComponent, ListHeaderComponent, RatingFormComponent]
})
export class FilmDetailPageComponent implements OnInit {
  text = 'Se ha agregado un nuevo favorito !!!';
  film: string = '';
  filmDetails: any = {};
  showRatingForm = false;
  showConfirmation = false;
  comment: string = '';
  rating: number | null = null;

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.film = params['id'];
      this.loadFilmDetails(this.film);
    });
  }

  async loadFilmDetails(id: string): Promise<any> {
    try {
      this.filmDetails = await this.filmService.getFilmDetails$(id).toPromise();
    } catch (error) {
    }
  }


  toggleShowConfirmation(): void {
    this.showConfirmation = !this.showConfirmation;
    setTimeout(() => {
      this.showConfirmation = !this.showConfirmation;
    }, 1000);
  }

  toggleRatingForm(): void {
    this.showRatingForm = !this.showRatingForm;
  }

  setRating(rating: number): void {
    this.rating = rating;
  }
  async rateFile(qualification: number): Promise<any> {
    this.text = "se ha calificado exitosamente  la películas"
    try {
      await this.filmService.addRatingMovie$(this.film, qualification,)?.toPromise();
      this.toggleShowConfirmation()
    } catch (error) {
    
    }
    this.toggleRatingForm()
  }

  async addMovieFavorite(): Promise<any> {
    try {
      const {success}= await this.filmService.addMovieFavorite$(this.film)?.toPromise();
      success && this.toggleShowConfirmation();
    } catch (error) {
      // this.toggleShowConfirmation()
    }
  }
}
