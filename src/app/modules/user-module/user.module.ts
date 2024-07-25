import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {userPageGuard} from "../../core/services/guard-service";
import {SettingsComponent} from "./settings/settings.component";
import {FlexyPostsDataview} from "../../component/flexy-posts/flexy-posts-dataview";
import {Url} from "../../core/constants/url";
import {UrlParams} from "../../core/constants/url-params";

const routes: Routes = [
    {path: Url.PROFILE, component: ProfileComponent, canActivate: [userPageGuard]},
    {path: Url.PROFILE + Url.PARAM_SEPARATOR + UrlParams.PROFILE_ID, component: ProfileComponent, canActivate: [userPageGuard]},
    {path: Url.SETTINGS, component: SettingsComponent, canActivate: [userPageGuard]}
];

@NgModule({
    declarations: [ProfileComponent, SettingsComponent],
    imports: [RouterModule.forRoot(routes), FlexyPostsDataview],
    exports: [RouterModule],
    bootstrap: []
})
export class UserModule {

}