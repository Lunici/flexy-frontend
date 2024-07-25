import {Injectable} from "@angular/core";
import {Auth} from "../constants/auth";
import {HttpResponse} from "../models/response/http-response";

@Injectable({providedIn: 'root'})
export class TokenService {
    public setToken(token: string): void {
        localStorage.setItem(Auth.TOKEN_KEY, token);
    }

    public getToken(): string {
        return localStorage.getItem(Auth.TOKEN_KEY) || Auth.EMPTY_TOKEN;
    }

    public removeToken(): void {
        localStorage.removeItem(Auth.TOKEN_KEY);
    }

    public refreshToken(response: HttpResponse<any>) {
        if (response.token) {
            this.setToken(response.token);
        }
    }
}
