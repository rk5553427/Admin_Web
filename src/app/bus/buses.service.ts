import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
   Url = environment.apiUrl
   busesrUrl:any;

    constructor(private httpClient:HttpClient, private router:Router) {
      this.busesrUrl = `${this.Url}/api/Bus`;
     }

    CreateUpdateDriver(payload:any): Observable<any>{
      return this.httpClient.post(`${this.busesrUrl}/CreateUpdateDriver`, payload)
    }
    GetAllDriver(): Observable<any>{
      return this.httpClient.get(`${this.busesrUrl}/GetAllDriver`)
    }
    DeleteDriver(id: number): Observable<any> {
     return this.httpClient.post(`${this.busesrUrl}/DeleteDriver?id=${id}`, {});
    }
}
