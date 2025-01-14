import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  // Import tap for side effects

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = "";
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, 
        },
      });
    }

    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('Response:', event);
          }
        },
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // Example: this.router.navigate(['/login']);
              console.error('Unauthorized access');
            }
          }
        },
        complete: () => {
          console.log('Request completed');
        }
      })
    );
  }
}
