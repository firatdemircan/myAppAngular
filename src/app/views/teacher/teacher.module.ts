import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson/lesson.component';
import {RouterModule, Routes} from "@angular/router";

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
    RouterModule.forChild(roots),]
})
export class TeacherModule { }
