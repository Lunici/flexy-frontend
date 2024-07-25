import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TokenService} from "./token-service";
import {HttpResponse} from "../models/response/http-response";
import {Observable, tap} from "rxjs";
import {ApiUrl} from "../constants/api-url";

@Injectable({providedIn: 'root'})
export class FlexyHttpService {


    constructor(private http: HttpClient, private tokenService: TokenService) {}

    public get<VIEW>(url: string, params: HttpParams): Observable<HttpResponse<VIEW>> {
        return this.http.get<HttpResponse<VIEW>>(ApiUrl.backendServer + url, {
            params: params,
            headers: this._generateHttpGetHeaders()
        })
            .pipe(
                tap(response => {
                    this.tokenService.refreshToken(response);
                })
            );
    }

    // public getWithoutToken(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void):  {
    //     return this.http.get(url, options, callback);
    // }

    private _generateHttpGetHeaders(): HttpHeaders {
        return new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Flexy-Token', this.tokenService.getToken());
    }
}