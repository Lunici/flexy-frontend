import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [MessageService]
})
export class AppComponent implements OnInit{

    constructor(private primengConfig: PrimeNGConfig) {
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }

}
