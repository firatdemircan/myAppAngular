import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {coerceStringArray} from "@angular/cdk/coercion";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router :Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("kyıkhkhjkh")

    let router =[];

    if (this.authService.authenticated) {
      let role = this.authService.role
      if (role.match('"admin"'))  {
        router = ['teacher'];
      }
      if (role.match('"tasra"'))  {
        router = ['student'];
      }

      if(router != []){
      this.router.navigate(router);
      }
    }

    return true;

  }

}
