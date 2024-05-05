import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {NotFoundPageComponent} from "./standalone/not-found-page/not-found-page.component";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexyMenubarComponent} from "./component/flexy-menubar/flexy-menubar.component";
import {AuthenticationModule} from "./modules/authentication-module/authentication.module";
import {ExploreComponent} from "./modules/explore-module/explore.component";
import {ExploreModule} from "./modules/explore-module/explore.module";
import {UserModule} from "./modules/user-module/user.module";
import {RippleModule} from "primeng/ripple";

const routes: Routes = [
    {path: '', redirectTo: 'explore', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        RouterOutlet,
        HttpClientModule,
        NotFoundPageComponent,
        ToastModule,
        BrowserAnimationsModule,
        RippleModule,

        // Router
        RouterModule.forRoot(routes),

        // Flexy Modules
        AuthenticationModule,
        ExploreModule,
        UserModule,

        // Flexy Components
        FlexyMenubarComponent
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}