import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { LocalStorageService } from 'angular-local-storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sessionId = ''
  private guestSessionId = ''
  private requestToken = ''
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

  createSession(): Observable<any> {
    return this.http.post(`${this.URL}/authentication/session/new`, {  body: { request_token: this.requestToken }});
  }

  grantPermission(): Observable<any> {
    return this.http.get(`${this.URL}/authenticate/${this.requestToken}/allow` );
  }

  async createAccount(email: string, password: string) {
    const { guest_session_id } = await this.createGuestSession().toPromise();
    this.guestSessionId = guest_session_id;
    const { request_token } = await this.createRequestToken().toPromise()
    this.requestToken = request_token
    await this.grantPermission().toPromise()
    const { session_id } = await this.createSession().toPromise()
    this.sessionId = session_id
  }

}
