import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson/lesson.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const roots:Routes =[{

  path: '',
  component: LessonComponent,
  children: [

  ],
}]

@NgModule({
  declarations: [
    LessonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(roots),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TeacherModule { }
