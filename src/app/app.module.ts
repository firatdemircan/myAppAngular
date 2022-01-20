import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {LoginComponent} from "./views/login/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TeacherGuard} from "./guards/teacher.guard";
import {StudentGuard} from "./guards/student.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DefaultComponent} from "./views/student/default/default.component";


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./views/teacher/teacher.module').then((x) => x.TeacherModule),
    canActivate :[TeacherGuard]
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./views/student/student.module').then((x) => x.StudentModule),
    canActivate :[StudentGuard]
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
