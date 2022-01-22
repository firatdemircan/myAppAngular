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
import { PagenotfoundComponent } from './views/login/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './views/login/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate :[AuthGuard] },
  { path: 'register', component: RegisterComponent },
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
  { path: '**', component: PagenotfoundComponent,
  canActivate :[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegisterComponent
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
