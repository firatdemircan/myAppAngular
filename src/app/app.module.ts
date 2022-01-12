import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {LessonComponent} from "./teacher/lesson/lesson.component";
import {TeacherModule} from "./teacher/teacher.module";
import {SharedModule} from "./shared/shared.module";
import {LoginComponent} from "./login/login/login.component";
import {AuthGuard} from "./shared/guards/auth.guard";


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then((x) => x.TeacherModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((x) => x.StudentModule),
    canActivate :[AuthGuard]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
