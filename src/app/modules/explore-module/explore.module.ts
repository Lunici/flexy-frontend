import {NgModule} from "@angular/core";
import {ExploreComponent} from "./explore.component";
import {RouterModule, Routes} from "@angular/router";
import {Url} from "../../core/constants/url";

const routes: Routes = [
    {path: Url.EXPLORE, component: ExploreComponent}
];

@NgModule({
    declarations: [ExploreComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: []
})
export class ExploreModule {

}