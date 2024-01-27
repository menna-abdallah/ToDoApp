import { Component, Input, input } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { TodoformComponent } from '../todoform/todoform.component';
import {TaskdisplayerComponent} from '../taskdisplayer/taskdisplayer.component';
import tasks from '../../assets/Tasks.json';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [TodolistComponent ,TodoformComponent , TaskdisplayerComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  todos : any[] =[];
  array : any[] =tasks

  insertTodo(task : string) {
    if (task.trim() != ""){
      this.array.push({
        id:"100",
        image: "https://robohash.org/doloremquesintcorrupti.png",
        title: "Task20",
        description: task,
        startDate: "2024-2-25",
        endDate: "2024-3-25",
        is_done: false
      });

      this.todos.push({
        id:"100",
        image: "https://robohash.org/doloremquesintcorrupti.png",
        title: "Task20",
        description: task,
        startDate: "2024-2-25",
        endDate: "2024-3-25",
        is_done: false
      });

  }
  }

}