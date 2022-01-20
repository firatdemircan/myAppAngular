import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases/clases.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {AuthGuard} from "../../guards/auth.guard";
import {StudentGuard} from "../../guards/student.guard";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { DefaultComponent } from './default/default.component';

const roots:Routes =[{

  path: '',
  component: DefaultComponent,
  children: [
    {path: 'class', component: ClasesComponent}

  ],
  canActivate: [StudentGuard],
}]

@NgModule({
  declarations: [
    ClasesComponent,
    DefaultComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(roots),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
