import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Url} from "../constants/url";

@Injectable({providedIn: "root"})
export class RouterService {

    constructor(private router: Router) {
    }

    public goToHome(): void {
        this.router.navigate([Url.home]);
    }

    public goToLogin(): void {
        this.router.navigate([Url.login]);
    }
}