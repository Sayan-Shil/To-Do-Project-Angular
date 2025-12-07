import { Component, Input } from '@angular/core';
import { Task } from '../app.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
@Input() task!: Task;
prompt="Hello, How can I assist you now?"
}
