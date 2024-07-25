import {Component, Input} from "@angular/core";
import {Post} from "../../../core/models/domain/Post";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {Url} from "../../../core/constants/url";

@Component({
    standalone: true,
    selector: 'flexy-post-item',
    imports: [
        ButtonModule
    ],
    templateUrl: './flexy-post-item.html'
})
export class FlexyPostItem {
    private _post?: Post;

    constructor(private router: Router) {}

    get post(): Post | undefined {
        return this._post;
    }

    @Input()
    set post(value: Post) {
        this._post = value;
    }

    onClickTitle(postId?: number): void {
        if (postId) {
            this.router.navigate([Url.POST, postId]);
        }
    }

}