import {Component} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {Url} from "../../core/constants/url";
import {AuthService} from "../../core/services/auth-service";

@Component({
    selector: 'flexy-home-page',
    standalone: true,
    imports: [
        ButtonModule
    ],
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {


    constructor(private authService: AuthService, private router: Router) {
    }

    onClickLogout() {
        this.authService.logout();
        this.router.navigate([Url.login]);
    }
}