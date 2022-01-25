import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases/clases.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {AuthGuard} from "../../guards/auth.guard";
import {StudentGuard} from "../../guards/student.guard";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { DefaultComponent } from './default/default.component';
import { TabviewComponent } from './tabview/tabview.component';
import { CompAComponent } from './tabview/comp-a/comp-a.component';
import { CompBComponent } from './tabview/comp-b/comp-b.component';
import { CompCComponent } from './tabview/comp-c/comp-c.component';

const roots:Routes =[{

  path: '',
  component: DefaultComponent,
  children: [
    {path: 'class', component: ClasesComponent},
    {path: 'tabs', component: TabviewComponent}


  ],
  canActivate: [StudentGuard],
}]

@NgModule({
  declarations: [
    ClasesComponent,
    DefaultComponent,
    TabviewComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(roots),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
