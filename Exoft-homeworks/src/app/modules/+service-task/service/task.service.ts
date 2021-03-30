import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../form/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksChanged = new EventEmitter<Task[]>();

  tasks: Task[] = [{
    'title': 'Finish Angular Screencast',
    'editing': false,
  }]

  constructor() { }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(taskTitle: string): void {
    this.tasks.push({
      title: taskTitle,
      editing: false
    })

    this.tasksChanged.emit(this.tasks.slice());
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksChanged.next(this.tasks.slice());
  }

  editTask(task: Task) {
    task.editing = true;
    this.tasksChanged.next(this.tasks.slice());
  }

  saveTask(task: Task) {
    task.editing = false;
    this.tasksChanged.next(this.tasks.slice());
  }
}
