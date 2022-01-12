import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaserequestService {

  constructor(private http : HttpClient) { }
  private baseUrl ="http://localhost:8050/api/";

  public send<T>(url:string,method:string,body?:any){
      return this.http.request(method,this.generateUrl(url),{body})
  }

  private generateUrl(url:string){
    return this.baseUrl+url;
  }


}
