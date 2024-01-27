import { Component, Input } from '@angular/core';
import tasks from '../../assets/Tasks.json';


@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  alltask : any = tasks;
  @Input() InputFromParent: any;

  deleteTodo(index : number) {
    this.InputFromParent.splice(index, 1);
  }
  update(index: number) {
    this.InputFromParent[index].is_done = !this.InputFromParent[index].is_done;
  }
}


