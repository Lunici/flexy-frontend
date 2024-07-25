import {Injectable} from "@angular/core";
import {Url} from "../constants/url";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token-service";
import {SignupRequestBody} from "../models/request-body/account-request-body";
import {ApiUrl} from "../constants/api-url";

@Injectable({providedIn: 'root'})
export class AccountService {


    constructor(private http: HttpClient, private tokenService: TokenService) {
    }

    public signup(requestBody: SignupRequestBody): Observable<Object> {
        return this.http.post(ApiUrl.backendServer + Url.SIGNUP, requestBody);
    }

}