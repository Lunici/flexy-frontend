import {Component} from "@angular/core";
import {FormPage} from "../../../core/interfaces/form-page";
import {AuthService} from "../../../core/services/auth-service";
import {TokenService} from "../../../core/services/token-service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmptyView} from "../../../core/models/response/views/empty-view";
import {Url} from "../../../core/constants/url";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {MessageUtils} from "../../../core/utils/message-utils";
import {ErrorMessage} from "../../../core/constants/error-message";
import {HttpResponse} from "../../../core/models/response/http-response";

@Component({
    selector: 'flexy-login-page',
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
            .subscribe({
                next: (response: object): void => {
                    const httpResponse: HttpResponse<EmptyView> = <HttpResponse<EmptyView>>response;
                    this.tokenService.setToken(httpResponse.token);
                    this.router.navigate([Url.HOME]);
                },
                error: (error: HttpErrorResponse): void => {
                    console.log(error);
                    if (error.status === HttpStatusCode.Unauthorized) {
                        this.messageService.add(MessageUtils.getStickyErrorMessage(ErrorMessage.USER_OR_PASSWORD_INCORRECT));
                    } else {
                        this.messageService.add(MessageUtils.getStickyUnknownErrorMessage());
                    }
                    this.enableForm();
                }
            })
    }

    protected goPageSignup(): void {
        this.router.navigate([Url.SIGNUP]);
    }

}