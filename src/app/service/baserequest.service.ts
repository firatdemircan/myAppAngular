import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "../model/result";
import {City} from "../model/city";

@Injectable({
  providedIn: 'root'
})
export class BaserequestService {

  constructor(private http : HttpClient) { }
  private baseUrl ="http://localhost:8050/api/";

  public send(url:string,method:string,body?:any):Observable<any>{
      return this.http.request<Result<any>>(method,this.generateUrl(url),{body})
  }

  private generateUrl(url:string):string{
    return this.baseUrl+url;
  }


}
