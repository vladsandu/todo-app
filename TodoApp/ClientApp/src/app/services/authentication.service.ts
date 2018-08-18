import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private readonly http: Http) { }

  register(body: User) {
    return this.http.post('/api/auth/register', body)
      .pipe(
        catchError(err => {
          return Observable.throw(err);
        }));
  }
}
