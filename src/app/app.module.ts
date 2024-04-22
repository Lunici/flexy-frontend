import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./modules/app-routing.module";
import {LoginPageComponent} from "./component/login-page/login-page.component";
import {NotFoundPageComponent} from "./component/not-found-page/not-found-page.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        RouterOutlet,
        HttpClientModule,
        AppRoutingModule,
        LoginPageComponent,
        NotFoundPageComponent
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}