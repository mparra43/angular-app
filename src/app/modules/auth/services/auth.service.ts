import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  private readonly URL_AUTH = environment.apiUser

  constructor(private http: HttpClient, ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body= { email, password}
    return this.http.post(`${this.URL_AUTH }/users/login`, body);
  }

  

  createGuestSession(): Observable<any> {
    return this.http.get(`${this.URL}/authentication/guest_session/new` );
  }

  createRequestToken(): Observable<any> {
    return this.http.get(`${this.URL}/authentication/token/new` );
  }

  createSession(requestToken: string): Observable<any> {
    return this.http.post(`${this.URL}/authentication/session/new`, {  body: { request_token: requestToken }});
  }



  async createAccount(email: string, password: string) {
    const { guest_session_id } = await this.createGuestSession().toPromise();
    const { request_token } = await this.createRequestToken().toPromise();
    const { session_id } = await this.createSession(request_token).toPromise()
    return this.http.post(`${this.URL_AUTH }/users/`, { email, password, session_id, guest_session_id });
  }

}
