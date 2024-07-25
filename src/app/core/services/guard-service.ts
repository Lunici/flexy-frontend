import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./auth-service";
import {Url} from "../constants/url";

export const userPageGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    if (inject(AuthService).hasAuthenticated()) {
        return true;
    }
    inject(Router).navigate([Url.LOGIN]);
    return false;
};

export const loginOrSignupPageGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    if (!inject(AuthService).hasAuthenticated()) {
        return true;
    }
    inject(Router).navigate([Url.HOME]);
    return false;
}