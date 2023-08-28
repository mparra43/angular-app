import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private readonly URL = environment.api

  private readonly headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmI2NDcxZmM3NGQyNzYwYTdhNmY4ZDI5MTRlNDQ1MyIsInN1YiI6IjY0ZTk1YjBhNDU4MTk5MDBhZGE5NDM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWHglT2To6RLTu8YlYOcSyF-1-7Rg1qabv0jJ1fXqVo'
  });
  constructor(private http: HttpClient) { }

  getAllFilms$(): Observable<any> {
    return this.http.get(`${this.URL}/movie/upcoming?language=en-US&page=1`, {headers: this.headers})   
  }

  getAllSeries$(): Observable<any> {
    return this.http.get(`${this.URL}/tv/popular?language=en-US&page=1`, {headers: this.headers})   
  }


}
