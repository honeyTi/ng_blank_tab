import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RouterGuardService implements CanActivate {

    private userName: string;
    private userType: string;
    private userSession: string;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.userName = sessionStorage.getItem('userName');
        this.userType = sessionStorage.getItem('userType');
        this.userSession = sessionStorage.getItem('userSession');

        if (this.userName !== undefined || this.userName !== '') {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}