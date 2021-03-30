import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ServiceTaskComponent } from './service-task.component';
import { FormComponent } from './form/form.component';

const routes = [
  {
    path: '',
    component: ServiceTaskComponent,
  }
];

@NgModule({
  declarations: [ServiceTaskComponent, FormComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, FormsModule, ReactiveFormsModule
  ]
})
export class ServiceTaskModule { }
