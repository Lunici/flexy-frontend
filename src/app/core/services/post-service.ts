import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import {TokenService} from "./token-service";
import {Url} from "../constants/url";
import {HttpParam} from "../constants/http-param";
import {FlexyHttpService} from "./flexy-http-service";
import {Observable} from "rxjs";
import {HttpResponse} from "../models/response/http-response";
import {PostsView} from "../models/response/views/posts-view";
import {Post} from "../models/domain/Post";
import {ApiUrl} from "../constants/api-url";

@Injectable({providedIn: 'root'})
export class PostService {
    constructor(private http: FlexyHttpService, private tokenService: TokenService) {}

    public getAllByAuthorNum(authorNum: number): Observable<HttpResponse<PostsView>> {
        const params: HttpParams = new HttpParams().set(HttpParam.authorNum, authorNum.toString());
        return this.http.get<PostsView>(ApiUrl.allPosts, params);
    }

    public getAllByProfileId(profileId: string): Observable<HttpResponse<PostsView>> {
        const params: HttpParams = new HttpParams().set(HttpParam.profileId, profileId);
        return this.http.get<PostsView>(ApiUrl.allPostsByProfile, params);
    }

    public getOneById(postId: number): Observable<HttpResponse<Post>> {
        const params: HttpParams = new HttpParams().set(HttpParam.postId, postId.toString());
        return this.http.get<Post>(ApiUrl.post, params);
    }
}