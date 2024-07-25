import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {Url} from "../../core/constants/url";
import {AuthService} from "../../core/services/auth-service";
import {Router} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {NgClass, NgIf} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {ButtonGroupModule} from "primeng/buttongroup";

@Component({
    standalone: true,
    selector: 'flexy-menu-bar',
    imports: [
        MenubarModule,
        NgClass,
        NgIf,
        RippleModule,
        InputTextModule,
        ToolbarModule,
        ButtonModule,
        MenuModule,
        ButtonGroupModule,
        RippleModule
    ],
    templateUrl: './flexy-menubar.component.html'
})
export class FlexyMenubarComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.initMenubarItems();
    }

    protected initMenubarItems(): void {
        this.items = [
            {
                label: 'My profile',
                icon: 'pi pi-fw pi-user',
                command: () => this.onClickUser()
            },
            {
                label: "Settings",
                icon: "pi pi-fw pi-cog",
                command: () => this.onClickSettings()
            },
            {
                label: 'Log out',
                icon: 'pi pi-fw pi-sign-out',
                command: () => this.onClickLogout()
            }
        ];
    }

    onClickExplore(): void {
        this.router.navigate([Url.EXPLORE]);
    }

    onClickUser(): void {
        this.router.navigate([Url.PROFILE]);
    }

    onClickLogout(): void {
        this.authService.logout();
        this.router.navigate([Url.LOGIN]);
    }

    onClickSettings(): void {
        this.router.navigate([Url.SETTINGS]);
    }
}