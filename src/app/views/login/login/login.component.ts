import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../guards/auth.service";
import {RequestService} from "../../../service/request.service";
import {LoginForm} from "../../../model/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();


  constructor(private service : RequestService,private authService :AuthService) { }

  ngOnInit(): void {

  }


  get username(){return this.loginForm.get("userName")}
  get password(){return this.loginForm.get("password")}

  login() {

    if(this.loginForm.invalid){
      return;
    }
    this.service.login("user/login","post",this.loginForm.value).subscribe((x)=>{
      if (x.result == "success"){
        this.authService.loginSuccess(x.data)
        console.log(x.data)
      }

    })
  }

  register() {
    this.authService.register()
  }
}
