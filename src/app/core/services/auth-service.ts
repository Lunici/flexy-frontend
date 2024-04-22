import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor() {
    }

    public hasAuthenticated(): boolean {
        const token : string | null = localStorage.getItem("flexy-token");
        return token !== null && !this._hasExpired(token);
    }

    private _hasExpired(jwtToken: string): boolean {
        return false;
    }
}