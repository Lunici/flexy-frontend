import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router, RouterModule, RouterOutlet} from "@angular/router";

@Component({
    selector: 'flexy-login-page',
    standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        PaginatorModule,
        ReactiveFormsModule,
        RouterOutlet
    ],
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
    private _formGroup: FormGroup | undefined;

    private _token: string = "";

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.initFormGroup();
    }

    get formGroup(): FormGroup {
        return <FormGroup>this._formGroup;
    }

    get username(): string {
        return this.formGroup.get('username')?.value;
    }

    get password(): string {
        return this.formGroup.get('password')?.value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    set formGroup(value: FormGroup | undefined) {
        this._formGroup = value;
    }

    private initFormGroup(): void {
        this._formGroup = new FormGroup({
            username: new FormControl<string | null>(null),
            password: new FormControl<string | null>(null)
        });
    }

    protected onLogin(): void {
        console.log("Log in");
        this.http.post("http://127.0.0.1:8080/login", {id: this.username, password: this.password})
            .subscribe((response) => {
                console.log(response);
                let httpResponse: LoginHttpResponse = <LoginHttpResponse>response;
                this.token = httpResponse.token;
            })
    }

    protected onClickTest(): void {
        console.log("test click!");
        let headers: HttpHeaders = new HttpHeaders({userid: this.username, token: this.token});
        // headers = headers.set("token", token);
        var response = this.http.get("http://127.0.0.1:8080/test", {headers: headers});
        response.subscribe(
            response => {
                console.log("C");
            },
            error => {
                console.log("D");
            }
        )
    }

    protected onClickChangePage() {
        this.router.navigate(['/login']);
    }
}

class LoginHttpResponse {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}
