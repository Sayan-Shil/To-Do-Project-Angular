import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { Task } from '../app.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-taskcard',
  imports: [NgClass],
  templateUrl: './taskcard.html',
  styleUrl: './taskcard.css',
})
export class Taskcard {
  @Input() task!: Task;
  @Output() select = new EventEmitter<Task>();
  @Output() toggleTask = new EventEmitter<Task>();


onCardClick() {
  this.select.emit(this.task);
}

  Math = Math;
 toggle(event: Event) {
  event.stopPropagation();  // VERY IMPORTANT
  this.toggleTask.emit(this.task);
}

  
}
