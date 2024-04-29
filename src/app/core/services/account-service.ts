import {Injectable} from "@angular/core";
import {Url} from "../constants/url";
import {HttpClient} from "@angular/common/http";
import {LoginRequestBody} from "../models/request-body/login-request-body";
import {Observable} from "rxjs";
import {TokenService} from "./token-service";
import {SignupRequestBody} from "../models/request-body/signup-request-body";

@Injectable({providedIn: 'root'})
export class AccountService {


    constructor(private http: HttpClient, private tokenService: TokenService) {
    }

    public signup(requestBody: SignupRequestBody): Observable<Object> {
        return this.http.post(Url.backendServer + Url.signup, requestBody);
    }

}