import { Component, AfterViewInit } from '@angular/core';
import { TodoItemService } from "../services/todoitem.service";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent implements AfterViewInit {

  constructor(private readonly todoItemService: TodoItemService) {

  }

  ngAfterViewInit(): void {
    this.todoItemService.get().
      subscribe(response => {
        debugger;
        console.log(response);
      });
  }

}
