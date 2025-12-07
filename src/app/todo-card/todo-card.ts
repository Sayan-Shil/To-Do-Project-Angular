import { Component, computed, signal } from '@angular/core';
import { Taskcard } from '../taskcard/taskcard';
import { TaskList } from '../Tasks';
import { Task } from '../app.model';
import { Sidebar } from "../sidebar/sidebar";
import { ZardProgressBarComponent } from "@shared/components/progress-bar/progress-bar.component";
import { ZardButtonComponent } from "@shared/components/button/button.component";

@Component({
  selector: 'todo-card',
  imports: [Taskcard, Sidebar, ZardProgressBarComponent, ZardButtonComponent],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.css',
})
export class TodoCard {
  today = new Date();
  
  taskList = signal<Task[]>(TaskList);

  totalTask = computed(() => this.taskList().length);

  finishedTask = computed(() =>
    this.taskList().filter(t => t.isCompleted).length
  );


  percentage = computed(() => {
    const total = this.totalTask();
    return total === 0 ? 0 : (this.finishedTask() / total) * 100;
  });


  todayFormatted: string = '';

  ngOnInit() {
    const today = new Date();
    // Format: Saturday, 22 December
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    };

    this.todayFormatted = today.toLocaleDateString('en-US', options);
  }

  selectedTask: Task | null = null;

  onTaskSelect(task: Task) {
    this.selectedTask = task;
  }


  toggleTask(task: Task) {
    this.taskList.update(list =>
      list.map(t =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  }
  
}
