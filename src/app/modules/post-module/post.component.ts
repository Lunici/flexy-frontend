import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../core/models/domain/Post";
import {PostService} from "../../core/services/post-service";
import {HttpResponse} from "../../core/models/response/http-response";
import {HttpErrorResponseHandler} from "../../core/handler/HttpErrorResponseHandler";
import {UrlParams} from "../../core/constants/url-params";

@Component({
    selector: 'flexy-post-page',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit{
    postId?: number;
    post?: Post;

    constructor(private route: ActivatedRoute, private postService: PostService, private handler: HttpErrorResponseHandler) {}

    ngOnInit(): void {
        this._initPostId();
        this._initPost();
    }

    private _initPostId(): void {
        this.route.paramMap.subscribe(params => {
            this.postId = parseInt(params.get(UrlParams.POST_ID)!);
        })
    }

    private _initPost(): void {
        if (this.postId) {
            this.postService.getOneById(this.postId).subscribe({
                next: (response: HttpResponse<Post>): void => {
                    this.post = response.data;
                },
                error: this.handler.defaultHttpErrorHandler
            });
        }
    }

}