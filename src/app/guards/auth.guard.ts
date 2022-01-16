import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router :Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log()

    let router;
    if (this.authService.authenticated) {
      let role = this.authService.role
      if (role == 'teacher') {
        router = ['/teacher'];
      }
      else if(role == 'student'){
        router = ['/tasra'];

      }

      this.router.navigate(router);
    }

    return null;

  }

}
