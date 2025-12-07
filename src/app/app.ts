import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoCard } from './todo-card/todo-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
