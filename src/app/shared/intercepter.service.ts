import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {
  private nreq: HttpRequest<any>;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("sdklfj")
    let token = sessionStorage.getItem("token")
    if (token != undefined && token.length > 0) {
      this.nreq = req.clone({
        setHeaders: {
          Authentication: "Bearer " + token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });

    }

    //adding token to header ends here!!

    return next.handle(this.nreq)
      .pipe(map((x) => {


        if (x instanceof HttpResponse) {
          let httpres = x as HttpResponse<any>;
          if (httpres.body) {
            if (httpres.body.status == 500) {
              //to login
            }

          }
        } else {

        }

        return x;

      }));


  }

}
