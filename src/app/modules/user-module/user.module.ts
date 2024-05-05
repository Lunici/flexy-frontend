import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {userPageGuard} from "../../core/services/guard-service";

const routes: Routes = [
    {path: 'profile', component: ProfileComponent, canActivate: [userPageGuard]},
];

@NgModule({
    declarations: [ProfileComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: []
})
export class UserModule {

}