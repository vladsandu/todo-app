import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TodoItemService {

  constructor(private readonly http: HttpClient) { }

  get() {
    return this.http.get('/api/todoitem')
      .pipe(
        map((value: any) => value),
        catchError(err => {
          return throwError(err);
        }));
  }

  post(todoItem: TodoItem) {
    return this.http.post('/api/todoitem', todoItem)
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
