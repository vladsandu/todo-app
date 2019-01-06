import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemInserterComponent } from './todo-item-inserter.component';

describe('TodoItemInserterComponent', () => {
  let component: TodoItemInserterComponent;
  let fixture: ComponentFixture<TodoItemInserterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemInserterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemInserterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
