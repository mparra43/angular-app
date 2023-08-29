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


  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }
  
  toggleNotesForm(): void {
    this.showNotesForm = !this.showNotesForm;
  }

  async saveNotes() {
    this.toggleNotesForm()
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
