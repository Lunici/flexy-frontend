import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./auth-service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    if (inject(AuthService).hasAuthenticated()) {
        console.log("已经登录");
        return true;
    }

    console.log("还没登陆");
    inject(Router).navigate(["/login"]);
    return false;
};