import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {LoginComponent} from "./views/login/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./views/teacher/teacher.module').then((x) => x.TeacherModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./views/student/student.module').then((x) => x.StudentModule),
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
    SharedModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {




}
