import { Component } from '@angular/core';
import { FilmService } from '@modules/films/services/film.service';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';
import { SearchComponent } from '@shared/components/search/search.component';

@Component({
    selector: 'app-films-page',
    templateUrl: './films-page.component.html',
    styleUrls: ['./films-page.component.css'],
    standalone: true,
    imports: [SearchComponent, SectionGenericComponent]
})
export class FilmsPageComponent {
  upcomingMovies: Array<any> = [];
  series: Array<any> = [];
  listObservers$: Array<any> = []

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadDataAll() 
    
  }

  async loadDataAll(): Promise<any> {
    try {
      const { results } = await this.filmService.getAllFilms$().toPromise()
      const series = await this.filmService.getAllSeries$().toPromise()
      if (results && Array.isArray(results)) {
        this.setData({films: results, series: series.results})
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async receiveData(event: string): Promise<any> {
    const { results } = await this.filmService.searchFilms$(event).toPromise()
    const series = await this.filmService.searchSeries$(event).toPromise()
    this.setData({films: results, series: series.results})
  }

  setData({films, series}:any){
    this.upcomingMovies = films;
    this.series = series;
  }

}
