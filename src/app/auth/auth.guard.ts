import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canLoad(route: Route) {
        if ( this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
