import { Component, OnInit } from '@angular/core';
import { Task } from './form/interfaces/todo';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.scss']
})
export class ServiceTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
    this.service.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks
      }
    );
  }
  editTask(e) {
    this.service.editTask(e);
  }
  saveTask(e) {
    this.service.saveTask(e);
  }

  deleteTask(e) {
    this.service.deleteTask(e);
  }
}
