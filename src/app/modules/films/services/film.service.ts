import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly account = environment.account;
  private readonly URL = environment.api;
  private readonly URL_AUTH = environment.apiUser;
  private readonly session = localStorage.getItem('session_id');
  private readonly guestSessionId = localStorage.getItem('guest_session_id');


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllFilms$(): Observable<any> {
    return this.http.get(`${this.URL}/movie/upcoming`,)
  }

  getAllSeries$(): Observable<any> {
    return this.http.get(`${this.URL}/tv/popular`)
  }


  getFilmDetails$(id: string): Observable<any> {
    return this.http.get(`${this.URL}/movie/${id}`)
  }

  searchFilms$(term: string): Observable<any> {
    const params = {
      query: term,
    };

    return this.http.get(`${this.URL}/search/movie`, { params })
  }

  getFavoriteFilms$(): Observable<any> | null {
    if (this.session) {
      return this.http.get(`${this.URL}/account/${this.account}/favorite/movies`, { params: { session_id: this.session } },)
    } else return null;
  }


  searchSeries$(term: string): Observable<any> {
    const params = {
      query: term,
    };
    return this.http.get(`${this.URL}/search/tv`, { params })
  }


  addRatingMovie$(id: string, qualification: number): Observable<any> | null {
    if (this.guestSessionId && this.session) {
      return this.http.post(`${this.URL}/movie/${id}/rating`, { value: qualification }, { params: { session_id: this.session, guest_session_id: this.guestSessionId } })
    } else return null;
  }


  addMovieFavorite$(id: string): Observable<any> | null {
    if (this.session) {
      return this.http.post(`${this.URL}/account/${this.account}/favorite`, { favorite: true, media_id: id, media_type: 'movie' }, { params: { session_id: this.session } },);
    } else return null;
  }

  addCommentMovie$(id: number, note: string): Observable<any> {
    console.log( this.cookieService.get('token'))
    return this.http.post(`${this.URL_AUTH}/notes`, { note, movieId: id }, {
      headers: new HttpHeaders({
        'x-token': this.cookieService.get('token')
      })
    });
  }
}
