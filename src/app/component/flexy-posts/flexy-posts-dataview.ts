import {Component, Input, OnInit} from "@angular/core";
import {DataViewModule} from "primeng/dataview";
import {Post} from "../../core/models/domain/Post";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {FlexyPostItem} from "./flexy-post-item/flexy-post-item";
import {PostService} from "../../core/services/post-service";
import {HttpErrorResponseHandler} from "../../core/handler/HttpErrorResponseHandler";
import {HttpResponse} from "../../core/models/response/http-response";
import {PostsView} from "../../core/models/response/views/posts-view";
import {DividerModule} from "primeng/divider";

@Component({
    standalone: true,
    selector: 'flexy-posts',
    imports: [
        DataViewModule,
        NgForOf,
        ButtonModule,
        NgClass,
        FlexyPostItem,
        NgIf,
        DividerModule
    ],
    templateUrl: './flexy-posts-dataview.html'
})
export class FlexyPostsDataview implements OnInit {

    constructor(private postService: PostService, private handler: HttpErrorResponseHandler) {}

    @Input() profileId!: string;
    @Input() isMyOwn: boolean = false;

    posts!: Post[];

    ngOnInit(): void {
        this._initPosts();
    }

    private _initPosts(): void {
        this.postService.getAllByProfileId(this.profileId!).subscribe({
            next: (response: HttpResponse<PostsView>): void => {
                this.posts = response.data.posts;
            },
            error: this.handler.defaultHttpErrorHandler
        });
    }

}