import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router:Router){}
  loginData = {
    email: '',
    password: ''
  };

  login() {
    if (this.loginData.email && this.loginData.password) {
      this.router.navigate(['/first-page']);
    }
  }

}
