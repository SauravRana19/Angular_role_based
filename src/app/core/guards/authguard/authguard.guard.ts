import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = localStorage.getItem('token');
    let loginrole = JSON.parse(localStorage.getItem('credential')!)[1];
    let role = route.data['role'];
    if (token) {
      if (role.includes(loginrole)) {
        return true;
      } else {
        this.router.navigate(['main/404'])
        return false
      }
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
