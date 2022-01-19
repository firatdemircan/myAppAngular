import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../guards/auth.service";
import {RequestService} from "../../../service/request.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : RequestService,private authService :AuthService) { }

  ngOnInit(): void {


  }

  login() {
    this.service.login("user/login","post",{userName :"firat.demircan",password :"Lucretius.2147"}).subscribe((x)=>{

      if (x.result == "success"){
        this.authService.loginSuccess(x.data)
      }

    })
  }
}
