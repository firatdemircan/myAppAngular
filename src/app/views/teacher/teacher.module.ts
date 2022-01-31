import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson/lesson.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { CssworkComponent } from './csswork/csswork.component';
import {ClasesComponent} from "../student/clases/clases.component";

const roots:Routes =[{

  path: '',
  component: CssworkComponent,
  children: [

    {path: 'css', component: CssworkComponent},

  ],
}]

@NgModule({
  declarations: [
    LessonComponent,
    CssworkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(roots),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ]
})
export class TeacherModule { }
