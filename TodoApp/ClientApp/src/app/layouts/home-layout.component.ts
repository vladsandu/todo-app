import { Component, AfterViewInit } from '@angular/core';
import { TodoItemService } from "../services/todoitem.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent implements AfterViewInit {
  todoItems: Observable<TodoItem[]>;

  constructor(private readonly todoItemService: TodoItemService) {
    this.todoItems = this.todoItemService.get();
  }

  ngAfterViewInit(): void {

  }

}
