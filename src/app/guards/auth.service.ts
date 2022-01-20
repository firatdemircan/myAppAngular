import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  get token(): string {
    return sessionStorage.getItem('token');
  }

  get role(): string {
    return sessionStorage.getItem('role');
  }

  checkLogin(){
  let token =   sessionStorage.getItem('token');

  if(token!= null){
    let role = sessionStorage.getItem('role');

    let router;

    console.log(role)
    if (role.match('"admin"'))  {
      router = ['teacher'];
    }
    if (role.match('"user"'))  {
      router = ['student'];

    }
    else {
      router  = ['/login']
    }

    console.log(router)

    this.router.navigate(router);

  }


  }

  loginSuccess(dt:any){

    console.log("sdfsdfg")

    if(dt.token != undefined || dt.token.length>0){
      sessionStorage.setItem("token",dt.token);
      sessionStorage.setItem("branchName",JSON.stringify(dt.info.branchName))
      sessionStorage.setItem("role",JSON.stringify(dt.info.role))

    }

    let router;

    let role = JSON.stringify(dt.info.role)
    console.log(role)
    if (role === "admin") {
      router = ['/teacher'];
    }
    else if(role === "user"){
      router = ['/student'];

    }
    else {
      router  = ['/login']
    }

    this.router.navigate(router);

    }

  get authenticated(): boolean {
    return this.token != undefined && this.token.length > 0;
  }

  logOut(){

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("branchName");

  }

}
