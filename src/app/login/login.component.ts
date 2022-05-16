import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Router:Router ) {}
  error: string = '';
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9@#$%]{3,9}$'),
    ]),
  });

  submitLoginForm(loginForm: FormGroup) {
    return this._AuthService
      .login(loginForm.value)
      .subscribe((response) => {
        if (response.message == 'success') {
          //  login success
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveCurrentUser();
          this._Router.navigate(['./home']);
        } else {
          //  login failed
          this.error = response.message;
        }
      });
  }

  ngOnInit(): void {}
}
