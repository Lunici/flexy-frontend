import {NgModule} from "@angular/core";
import {ExploreComponent} from "./explore.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: 'explore', component: ExploreComponent}
];

@NgModule({
    declarations: [ExploreComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: []
})
export class ExploreModule {

}