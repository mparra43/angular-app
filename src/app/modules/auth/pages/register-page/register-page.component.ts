import { UntypedFormControl, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterPageComponent {
  errorSession: boolean = false
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private router: Router, private authService: AuthService,) { }

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

  async sendLogin() {
    const { email, password } = this.formLogin.value
    const response = await this.authService.createAccount(email, password);
    this.router.navigate(['/', 'login'])
  }
}
