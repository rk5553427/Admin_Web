import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}
  loginData = {
    email: '',
    password: '',
  };

  // login() {
  //   if (this.loginData.email && this.loginData.password) {
  //     this.router.navigate(['/first-page']);
  //   }

  //  this.authService.Register(this.loginData).subscribe({
  //   next(res) {
  //     if(res.Success){
  //       this.router.navigate(['/first-page']);
  //     }
  //   },error(err) {
  //     alert(err);
  //   },
  //  })
  // }
  login() {
    if (this.loginData.email != null && this.loginData.password != null) {
      this.authService.Login(this.loginData).subscribe({
        next: (res: any) => {
          // Using arrow function to maintain correct 'this'
          if (res.Success) {
            this.router.navigate(['/first-page']);
          }
        },
        error: (err: any) => {
          alert(err);
        },
      });
    }
  }
}
