import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {AuthService} from "../guards/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {
  private nreq: HttpRequest<any>;

  constructor(private authService :AuthService,private router : Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let nreq = req.clone({
      setHeaders: {
        Authentication: this.authService.authenticated
          ? `Bearer ${this.authService.token}`
          : '',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    //set header token

    return next.handle(nreq).pipe(
      map((res) => {
        if (res instanceof HttpResponse) {
          if (res.body) {
            if (res.body.status == 401) {
              this.authService.logOut();
              this.router.navigate(['']);
            }
          }
        }

        return res;
      }),
      catchError((e) => {
        if (e.error.status == 401) {
          this.authService.logOut();
          this.router.navigate(['']);
        }
        return throwError(e);
      })
    );


  }

}
