import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases/clases.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {AuthGuard} from "../../guards/auth.guard";
import {StudentGuard} from "../../guards/student.guard";

const roots:Routes =[{

  path: '',
  component: ClasesComponent,
  children: [

  ],
  canActivate: [StudentGuard],
}]

@NgModule({
  declarations: [
    ClasesComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(roots)
  ]
})
export class StudentModule { }
