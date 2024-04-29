import {Injectable} from "@angular/core";
import {Auth} from "../constants/auth";
import {LoginRequestBody} from "../models/request-body/login-request-body";
import {Observable} from "rxjs";
import {Url} from "../constants/url";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token-service";

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient, private tokenService: TokenService) {
    }

    public hasAuthenticated(): boolean {
        const token : string = this.tokenService.getToken();
        return token !== Auth.EMPTY_TOKEN && !this._hasExpired(token);
    }

    private _hasExpired(jwtToken: string): boolean {
        return false;
    }

    public login(requestBody: LoginRequestBody): Observable<Object> {
        return this.http.post(Url.backendServer + Url.login, requestBody);
    }

    public logout(): void {
        this.tokenService.removeToken();
    }
}