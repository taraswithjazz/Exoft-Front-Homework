import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveTaskComponent} from './directives-task.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import { ValidationDirectiveDirective } from './shared-directives/validation-directive.directive';
import { BgColorDirective } from './shared-directives/bg-color.directive';
import { HoverColorDirective } from './shared-directives/hover-color.directive';
import { ReversePipe } from './shared-directives/reverse.pipe';

const routes = [
  {
    path: '',
    component: DirectiveTaskComponent,
  }
];

@NgModule({
  declarations: [DirectiveTaskComponent, ValidationDirectiveDirective, BgColorDirective, HoverColorDirective, ReversePipe],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MaterialModule
  ]
})
export class DirectiveTaskModule {
}
