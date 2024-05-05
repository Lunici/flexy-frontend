import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {PrimeNGConfig} from "primeng/api";

// bootstrapApplication(AppModule)
//   .catch((err) => console.error(err));



platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

