import {Component} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormPage} from "../../core/interfaces/form-page";
import {Router} from "@angular/router";
import {Url} from "../../core/constants/url";
import {AccountService} from "../../core/services/account-service";
import {HttpResponse} from "../../core/models/response/http-response";
import {EmptyView} from "../../core/models/response/views/empty-view";
import {HttpStatusCode} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
    selector: 'flexy-signup-page',
    standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        ToastModule
    ],
    providers: [MessageService],
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
            this.messageService.add({severity: 'error', summary: 'Sorry', detail: 'The passwords are not matched', sticky: true});
            return;
        }

        this.messageService.clear();

        this.disableForm();

        this.accountService.signup({id: this.userid, name: this.username, password: this.password})
            .subscribe((response: object): void => {
                const httpResponse: HttpResponse<EmptyView> = <HttpResponse<EmptyView>>response;
                if (httpResponse.status === HttpStatusCode.Conflict) {
                    this.enableForm();
                    this.messageService.add({severity: 'error', summary: 'Sorry', detail: 'The user ID already exists', sticky: true})
                }
                this.goPageLogin();
            });
    }

    protected goPageLogin() {
        this.router.navigate([Url.login]);
    }

    protected repeatPasswordNotMatch(): boolean {
        return this.password !== this.repeatPassword;
    }
}