import { Component, Input, input } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { TodoformComponent } from '../todoform/todoform.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [TodolistComponent ,TodoformComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  todos : any[] =[];

  insertTodo(task : string) {
    if (task.trim() != "")
      this.todos.push({
        name: task,
        done: false
      });
  }


}
