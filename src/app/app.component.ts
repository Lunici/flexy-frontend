import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl:    './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {


    constructor(private router: Router) {
    }

    toPage() {
        this.router.navigate(["/login"]);

    }

}
