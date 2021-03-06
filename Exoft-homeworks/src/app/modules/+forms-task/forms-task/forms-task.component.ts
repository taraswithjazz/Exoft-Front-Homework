import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-task',
  templateUrl: './forms-task.component.html',
  styleUrls: ['./forms-task.component.scss']
})
export class FormsTaskComponent{

  signInForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
onSubmit(event){
  console.log(`Username is ${this.signInForm.controls.userName.value}`);
  console.log(`Password is ${this.signInForm.controls.password.value}`);
  event.currentTarget.reset();
  this.signInForm.reset();
}

}
