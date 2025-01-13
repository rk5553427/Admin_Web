import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Admin_Web';
  topHeader:boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(()=>{
      this.topHeader = this.router.url !== "/login";
    })
  }
  goToHome() {
    this.router.navigate(['/login']);
  }
}
