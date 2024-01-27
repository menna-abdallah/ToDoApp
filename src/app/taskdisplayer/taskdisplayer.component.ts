import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskCardComponent} from '../task-card/task-card.component';
import {FormsModule} from '@angular/forms';
import tasks from '../../assets/Tasks.json';



@Component({
  selector: 'app-taskdisplayer',
  standalone: true,
  imports: [TaskCardComponent ,FormsModule, CommonModule  ],
  templateUrl: './taskdisplayer.component.html',
  styleUrl: './taskdisplayer.component.css'
})
export class TaskdisplayerComponent {
  dataTasks :any = tasks; 
  matched :any = this.dataTasks

 deletbyid(id : string){
  this.matched = this.dataTasks.filter((task : any) => task.id !== id)
 }

 findtask(key:string){
  if (key == '') {
    this.matched = this.dataTasks;
    return;
  }
  this.matched = this.dataTasks.filter((task : any) => (task.description.toLowerCase() + task.title.toLowerCase()).includes(key.toLowerCase()));
  console.log(this.matched)
 } 

 resetSearch(){
  this.matched = this.dataTasks;

 }
}

