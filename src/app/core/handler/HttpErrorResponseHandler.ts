import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Url} from "../constants/url";
import {TokenService} from "../services/token-service";

@Injectable({providedIn: 'root'})
export class HttpErrorResponseHandler {

    constructor(private router: Router, private tokenService: TokenService) {}

    defaultHttpErrorHandler = (error: HttpErrorResponse): void => {
        if (error.status === HttpStatusCode.InternalServerError) {
            this.router.navigate([Url.ERROR]);
            return
        }
        if (error.status === HttpStatusCode.Forbidden) {
            this.tokenService.removeToken();
            this.router.navigate([Url.LOGIN]);
            return;
        }
        if (error.status === HttpStatusCode.NotFound) {
            this.router.navigate([Url.NOT_FOUND]);
            return;
        }
    };

}