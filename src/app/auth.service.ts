import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl:any;  
  Url = environment.apiUrl
  
  constructor(private httpClient:HttpClient) {
    this.registerUrl = `${this.Url}/api/Authorize`;
   }

  Register(register:any): Observable<any>{
    return this.httpClient.post(`${this.registerUrl}/Register`, register)
  }
  Login(login:any): Observable<any>{
    return this.httpClient.post(`${this.registerUrl}/Login`, login)
  }
}
