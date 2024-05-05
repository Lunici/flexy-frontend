import {Component} from "@angular/core";
import {FormPage} from "../../../core/interfaces/form-page";
import {AccountService} from "../../../core/services/account-service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageUtil} from "../../../core/utils/message-util";
import {ErrorMessage} from "../../../core/constants/error-message";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {Url} from "../../../core/constants/url";


@Component({
    selector: 'flexy-signup-page',
    templateUrl: './signup-page.component.html'
})
export class SignupPageComponent extends FormPage {

    get userid(): string {
        return this.formGroup.get('userid')?.value;
    }

    get username(): string {
        return this.formGroup.get('username')?.value;
    }

    get password(): string {
        return this.formGroup.get('password')?.value;
    }

    get repeatPassword(): string {
        return this.formGroup.get("repeatPassword")?.value;
    }

    constructor(private router: Router,
                private accountService: AccountService,
                private messageService: MessageService) {
        super();
    }

    override initFormGroup(): FormGroup {
        return new FormGroup({
            userid: new FormControl<string | null>(null, Validators.required),
            username: new FormControl<string | null>(null, Validators.required),
            password: new FormControl<string | null>(null, Validators.required),
            repeatPassword: new FormControl<string | null>(null, Validators.required)
        });
    }

    protected onClickSignup() {
        if (this.formGroup.invalid) {
            return;
        }

        if (this.repeatPasswordNotMatch()) {
            this.messageService.add(MessageUtil.getStickyErrorMessage(ErrorMessage.PASSWORDS_NOT_MATCHED));
            return;
        }

        this.messageService.clear();

        this.disableForm();

        this.accountService.signup({id: this.userid, name: this.username, password: this.password})
            .subscribe({
                next: (response: object): void => {
                    this.goPageLogin();
                },
                error: (error: HttpErrorResponse): void => {
                    if (error.status === HttpStatusCode.Conflict) {
                        this.messageService.add(MessageUtil.getStickyErrorMessage(ErrorMessage.USER_ID_DUPLICATED));
                        this.enableForm();
                    }
                    else {
                        this.messageService.add(MessageUtil.getStickyUnknownErrorMessage());
                    }
                }
            })
    }

    protected goPageLogin() {
        this.router.navigate([Url.login]);
    }

    protected repeatPasswordNotMatch(): boolean {
        return this.password !== this.repeatPassword;
    }
}