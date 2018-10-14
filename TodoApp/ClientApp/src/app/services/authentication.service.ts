import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private readonly http: HttpClient) { }

  register(body: User) {
    return this.http.post('/api/auth/register', body)
      .pipe(
        map((value : any) => value),
        catchError(err => {
          return Observable.throw(err);
        }));
  }

  login(body: User) {
    return this.http.post('/api/auth/login', body)
      .pipe(
        map((value : any) => value.json()),
        catchError(err => {
          return Observable.throw(err);
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
