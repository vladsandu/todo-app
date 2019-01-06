import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TodoItemService {

  constructor(private readonly http: HttpClient) { }

  get() {
    return this.http.get('/api/todoitem')
      .pipe(
        map((value: any) => value),
        catchError(err => {
          return Observable.throw(err);
        }));
  }
}
