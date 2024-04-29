import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpStatusCode} from "@angular/common/http";
import {Router, RouterOutlet} from "@angular/router";
import {HttpResponse} from "../../core/models/response/http-response";
import {EmptyView} from "../../core/models/response/views/empty-view";
import {TokenService} from "../../core/services/token-service";
import {Url} from "../../core/constants/url";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {FormPage} from "../../core/interfaces/form-page";
import {AuthService} from "../../core/services/auth-service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
    selector: 'flexy-login-page',
    standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        PaginatorModule,
        ReactiveFormsModule,
        RouterOutlet,
        PasswordModule,
        DividerModule,
        ToastModule,
    ],
    providers: [MessageService],
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent extends FormPage {

    get userid(): string {
        return this.formGroup.get('userid')?.value;
    }

    get password(): string {
        return this.formGroup.get('password')?.value;
    }

    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router,
                private messageService: MessageService) {
        super();
    }

    override initFormGroup(): FormGroup {
        return new FormGroup({
            userid: new FormControl<string | null>(null, Validators.required),
            password: new FormControl<string | null>(null, Validators.required)
        });
    }

    protected onCLickLogin(): void {
        if (this.formGroup.invalid) {
            return;
        }

        this.messageService.clear();

        this.disableForm();

        this.authService.login({id: this.userid, password: this.password})
            .subscribe((response: object): void => {
                const httpResponse: HttpResponse<EmptyView> = <HttpResponse<EmptyView>>response;
                if (httpResponse.status === HttpStatusCode.Ok) {
                    this.tokenService.setToken(httpResponse.token);
                    this.router.navigate([Url.home]);
                } else if (httpResponse.status === HttpStatusCode.Unauthorized) {
                    this.enableForm();
                    this.messageService.add({severity: 'error', summary: "Sorry", detail: "The user ID or password is wrong.", sticky: true});
                }
            });
    }

    protected goPageSignup(): void {
        this.router.navigate([Url.signup]);
    }

}