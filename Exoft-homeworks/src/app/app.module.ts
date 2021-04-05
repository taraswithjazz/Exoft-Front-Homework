// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

// Components
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubjectTaskComponent } from './modules/+Subject-task/subject-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
