import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private readonly http: HttpClient) { }

  register(body: User) {
    return this.http.post('/api/auth/register', body)
      .pipe(
        map((value: any) => value),
        catchError(err => {
          return throwError(err);
        }));
  }

  login(body: User) {
    return this.http.post('/api/auth/login', body)
      .pipe(
        map((value: any) => value),
        catchError(err => {
          return throwError(err);
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
