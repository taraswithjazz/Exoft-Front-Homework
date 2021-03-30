import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'directives-task',
    pathMatch: 'full'
  },
  {
    path: 'directives-task',
    loadChildren: () => import('./modules/+directives-task/directives-task.module').then(module => module.DirectiveTaskModule)
  },
  {
    path: 'forms-task',
    loadChildren: () => import('./modules/+forms-task/forms-task/forms-task.module').then(module => module.FormsTaskModule)
  },
  {
    path: 'service-task',
    loadChildren: () => import('./modules/+service-task/service-task.module').then(module => module.ServiceTaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
