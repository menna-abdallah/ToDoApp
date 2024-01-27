import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [ ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() currentTask: any

  @Output() sendToParent = new EventEmitter<string>()

  deleteTask(id : string){
    console.log("IN CHILD" , id)
    this.sendToParent.emit(id)
  }}

