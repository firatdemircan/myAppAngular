import { Injectable } from '@angular/core';
import {BaserequestService} from "./baserequest.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private request:BaserequestService) { }

  getBy(url:string,method:string){
    return this.request.send(url,method)
  }

  login(url:string,method:string,body:any){
    return this.request.send("user/login","post", {userName :"firat.demircan",password :"Lucretius.2147"})
  }

}
