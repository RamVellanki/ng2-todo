import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { TodoserviceService } from './todoservice.service';
import { TODO } from "app/todo";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoserviceService]
})
export class AppComponent implements OnInit {
  todoData: FirebaseListObservable<any[]>;
  authState: boolean;
  newTodo: String;
  constructor(private todoService: TodoserviceService, public af: AngularFire) {
    this.todoData = this.af.database.list('/todos');
    this.todoData.forEach(function (a) {
      console.log(a);
    })
  }

  ngOnInit(): void {
    if (!this.authState) {
      this.af.auth.login();
    }
    this.af.auth.map((auth) => {
      if (auth == null) {
        alert("Need to login!");
        this.authState = false;
      } else {
        this.authState = true;
      }
    });
  }

  ngOnDesstroy(): void {
  }
  onAdd(): void {
    var todo = new TODO(false, this.newTodo);;
    this.todoData.push(todo);
  }
  title = 'Todo App!';
}
