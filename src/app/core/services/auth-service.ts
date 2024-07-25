import {Injectable} from "@angular/core";
import {Auth} from "../constants/auth";
import {Observable} from "rxjs";
import {Url} from "../constants/url";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token-service";
import {LoginRequestBody} from "../models/request-body/auth-request-body";
import {ApiUrl} from "../constants/api-url";

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
        return this.http.post(ApiUrl.backendServer + Url.LOGIN, requestBody);
    }

    public logout(): void {
        this.tokenService.removeToken();
    }
}