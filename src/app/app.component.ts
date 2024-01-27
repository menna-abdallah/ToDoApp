import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {WrapperComponent} from './wrapper/wrapper.component'
import {TaskdisplayerComponent} from './taskdisplayer/taskdisplayer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavbarComponent , WrapperComponent , TaskdisplayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';
}
