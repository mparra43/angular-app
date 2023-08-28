import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = ''
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
