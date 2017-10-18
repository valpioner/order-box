import { Injectable } from '@angular/core'
import {
    CanActivate, CanActivateChild, CanLoad, Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, NavigationExtras
  } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{
    constructor(
        private authService: AuthService,
        private router: Router ){ }

    canLoad(route: Route): boolean {
        // const url = `/${route.path}`;
        // return this.checkLogin(url);

        if (this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canActivate(){
        if (this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canActivateIfAdmin(){
        
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // console.log('canActivateChild Guard is called');
        // const url: string = state.url;
        // return this.checkLogin(url);

        if (this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
      }
}