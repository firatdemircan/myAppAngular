import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = sessionStorage.getItem("token")
    if(token != undefined && token.length>0) {
      let nreq = req.clone({
        setHeaders: {
          Authentication: "Bearer "+token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });
    }

    //adding token to header ends here!!

    return next.handle(req)
      .pipe(map((x) => {

        if(x instanceof HttpResponse){
            let httpres = x as HttpResponse<any>;
              if(httpres.body){
                if(httpres.body.status ==512){
                  //logine yönlendir
                }

              }
        }

        return x;
      }))


  }

}
