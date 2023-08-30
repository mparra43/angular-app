import { Component } from '@angular/core';
import { FilmService } from '@modules/films/services/film.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent {
  showNotesForm = false;
  favoriteMovies: Array<any> = []
  filmId: number| null = null;


  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  toggleNotesForm(film:number | null): void {
    this.filmId = film;
    this.showNotesForm = !this.showNotesForm;
  }

  async saveNotes(comment:string){
    try {
      if (typeof this.filmId === "number"){
        const { results } = await this.filmService.addCommentMovie$(this.filmId, comment).toPromise();
        console.log(results);
        this.toggleNotesForm(null)
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async loadDataAll(): Promise<any> {
    try {
       const { results } = await this.filmService.getFavoriteFilms$()?.toPromise();
       this.favoriteMovies = results;
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }


}
