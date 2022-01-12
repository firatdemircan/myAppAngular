import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson/lesson.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {ClasesComponent} from "../student/clases/clases.component";
import {AuthGuard} from "../shared/guards/auth.guard";

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
    RouterModule.forChild(roots)]
})
export class TeacherModule { }
