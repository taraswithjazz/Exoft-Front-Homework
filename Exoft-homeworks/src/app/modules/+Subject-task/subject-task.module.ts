import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectTaskComponent } from './subject-task.component';

const routes = [
  {
    path: '',
    component: SubjectTaskComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class SubjectTaskModule { }
