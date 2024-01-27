import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {

  @Output() newTodo = new EventEmitter<string>();

  addTodo(name : string) {
    this.newTodo.emit(name);
  }

}


