import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  taskName = new FormControl('');

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  AddTask(): void {
    this.taskService.addTask(this.taskName.value);
    this.taskName.reset();
  }
}
