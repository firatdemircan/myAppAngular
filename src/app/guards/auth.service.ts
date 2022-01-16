import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get token(): string {
    return sessionStorage.getItem('token');
  }

  get role(): string {
    return sessionStorage.getItem('role');
  }

  loginSuccess(dt:any){

    console.log("sdfsdfg")

    if(dt.token != undefined || dt.token.length>0){
      sessionStorage.setItem("token",dt.token);
      sessionStorage.setItem("branchName",JSON.stringify(dt.branchName))
    }
  }


  get authenticated(): boolean {
    return this.token != undefined && this.token.length > 0;
  }

  logOut(){

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("branchName");

  }

}
