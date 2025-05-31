import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  responseMessage:any;
  constructor(private router: Router, private authService: AuthService) {}
  loginData = {
    username: '',
    password: '',
  };

  login() {
    this.responseMessage="";
    if (this.loginData.username != null && this.loginData.password != null) {
      this.authService.Login(this.loginData).subscribe({
        next: (res: any) => {er
          // Using arrow function to maintain correct 'this'
          if (res.success) {
            localStorage.setItem("loginData", JSON.stringify(res.data))
            this.router.navigate(['/deshboard']);
          }else{
            this.responseMessage = "UserName or Password is wrong.";
          }
        },
        error: (err: any) => {
          alert(err);
        },
      });
    }
  }
}
