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
    this.service.login("sdfg","sdf","").subscribe((x)=>{

      // @ts-ignore
      if (x.result == "success"){
        // @ts-ignore
        this.authService.loginSuccess(x.data)
      }

    })
  }
}
