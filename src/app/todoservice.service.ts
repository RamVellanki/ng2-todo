import { Injectable } from '@angular/core';
import {TODO} from './todo';

@Injectable()
export class TodoserviceService {
  todos: TODO[] = [
    new TODO(false, "Test 1"),
    new TODO(false, "Test 2"),
  ]
  constructor() {

  }
  getTodos(): TODO[]{
    return this.todos;
  }
  addTodo(todo:TODO): void{
    this.todos.push(todo);
  }
}
