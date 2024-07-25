import {Injectable} from "@angular/core";
import {FlexyHttpService} from "./flexy-http-service";
import {Observable} from "rxjs";
import {HttpResponse} from "../models/response/http-response";
import {User} from "../models/domain/User";
import {HttpParams} from "@angular/common/http";
import {HttpParam} from "../constants/http-param";
import {Url} from "../constants/url";

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: FlexyHttpService) {}

    public getUserByProfileId(profileId: string): Observable<HttpResponse<User>> {
        const params: HttpParams = new HttpParams().set(HttpParam.profileId, profileId);
        return this.http.get<User>(Url.USER, params);
    }
}