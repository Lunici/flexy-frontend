import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {InputTextModule} from "primeng/inputtext";
import {loginOrSignupPageGuard} from "../../core/services/guard-service";

const routes: Routes = [
    {path: 'login', component: LoginPageComponent, canActivate: [loginOrSignupPageGuard]},
    {path: 'signup', component: SignupPageComponent, canActivate: [loginOrSignupPageGuard]},
];

@NgModule({
    declarations: [LoginPageComponent, SignupPageComponent],
    imports: [
        PasswordModule,
        ToastModule,
        ReactiveFormsModule,

        // Router
        RouterModule.forRoot(routes),
        InputTextModule,
        ButtonModule

    ],
    exports: [RouterModule],
    bootstrap: []
})
export class AuthenticationModule {

}