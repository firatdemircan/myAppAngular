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

    if(this.authService.authenticated){
      this.authService.checkLogin()
    }


  }

  login() {
    console.log("lksdfj")
    this.service.login("user/login","post",this.loginForm.value).subscribe((x)=>{
      if (x.result == "success"){
        this.authService.loginSuccess(x.data)
      }

    })
  }
}
