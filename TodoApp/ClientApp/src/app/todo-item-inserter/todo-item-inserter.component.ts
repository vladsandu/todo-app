import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItemService } from "../services/todoitem.service";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'todo-item-inserter',
  templateUrl: './todo-item-inserter.component.html',
  styleUrls: ['./todo-item-inserter.component.css']
})
export class TodoItemInserterComponent implements OnInit {
  @Output() shouldRefreshItems = new EventEmitter<void>();
  resultMessage: string;
  
  constructor(private readonly todoItemService: TodoItemService) { }

  ngOnInit() {
  }

  insertTodo(description: string) {
    const todoItem = { description };
    this.todoItemService.post(todoItem).pipe(
      catchError(err => {
        this.resultMessage = err.message;
        return throwError(err);
      }))
      .subscribe(() => {
        this.resultMessage = "Message inserted successfully!";
        this.shouldRefreshItems.emit();
      });
  }
}
