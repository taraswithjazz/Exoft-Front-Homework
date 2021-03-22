import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../shared/material/material.module';
import {FormsTaskComponent} from '../forms-task/forms-task.component'

const routes = [
  {
    path: '',
    component: FormsTaskComponent,
  }
];

@NgModule({
  declarations: [FormsTaskComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule, ReactiveFormsModule
  ]
})
export class FormsTaskModule { }

