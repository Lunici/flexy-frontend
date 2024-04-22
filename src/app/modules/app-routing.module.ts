import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "../component/login-page/login-page.component";
import {NotFoundPageComponent} from "../component/not-found-page/not-found-page.component";
import {HomePageComponent} from "../component/home-page/home-page.component";
import {authGuard} from "../core/services/guard-service";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginPageComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), LoginPageComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {

}