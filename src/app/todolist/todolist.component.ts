import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  @Input() InputFromParent: any;

  deleteTodo(index : number) {
    this.InputFromParent.splice(index, 1);
  }
  update(index: number) {
    this.InputFromParent[index].done = !this.InputFromParent[index].done;
  }
}


