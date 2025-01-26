import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.scss'
})
export class DeshboardComponent {
  constructor(private authService: AuthService) {}

  logOut(){
    this.authService.logOut();
  }
}
