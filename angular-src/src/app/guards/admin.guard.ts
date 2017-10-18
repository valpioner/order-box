import { Injectable } from '@angular/core'
import {
    CanActivate, CanActivateChild, CanLoad, Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, NavigationExtras
  } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad{
    constructor(
        private authService: AuthService,
        private router: Router ){ }

    canLoad(route: Route): boolean {
        return this.authService.isAdmin();
    }

    canActivate(): boolean{
        return this.authService.isAdmin();
    }

    canActivateChild(): boolean {
        return this.authService.isAdmin();
      }
}