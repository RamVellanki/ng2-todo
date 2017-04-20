import { Component } from '@angular/core';
import { TodoserviceService } from './todoservice.service';
import { TODO } from "app/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoserviceService]
})
export class AppComponent {
  todoData: TODO[];
  newTodo: String;
  constructor(private todoService: TodoserviceService) {
    this.todoData = todoService.getTodos();
    this.todoData.forEach(function(a){
      console.log(a);
    })
  }
  onAdd(): void{
    var todo = new TODO(false, this.newTodo);;
    this.todoService.addTodo(todo);
  }
  title = 'Todo App!';
}
