import { UntypedFormControl, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '@modules/auth/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(responseOk => {
        console.log('Session iniciada correcta', responseOk);
        const { token, session_id, guest_session_id } = responseOk
        localStorage.setItem('session_id', session_id);
        localStorage.setItem('guest_session_id', guest_session_id);
        this.cookie.set('token', token, 4, '/')
        this.router.navigate(['/', 'films'])
      },
        err => {
          this.errorSession = true
        })
  }
}