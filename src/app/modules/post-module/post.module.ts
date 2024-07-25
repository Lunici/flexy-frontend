import {NgModule} from "@angular/core";
import {PostComponent} from "./post.component";
import {RouterModule, Routes} from "@angular/router";
import {Url} from "../../core/constants/url";
import {UrlParams} from "../../core/constants/url-params";

const routes: Routes = [
    {path: Url.POST + Url.PARAM_SEPARATOR + UrlParams.POST_ID, component: PostComponent}
];

@NgModule({
    declarations: [PostComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: []
})
export class PostModule {

}