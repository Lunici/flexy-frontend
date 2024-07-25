import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ObjectUtils} from "../../../core/utils/object-utils";
import {User} from "../../../core/models/domain/User";
import {UserService} from "../../../core/services/user-service";
import {UrlParams} from "../../../core/constants/url-params";

@Component({
    selector: 'flexy-profile-page',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    profileId: string = 'MY_OWN';
    user?: User;
    isMyOwn: boolean = false;

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit(): void {
        this._initProfileId();
    }

    private _initProfileId(): void {
        this.route.paramMap.subscribe(params => {
            if (params.has(UrlParams.PROFILE_ID)) {
                this.profileId = params.get(UrlParams.PROFILE_ID)!;
            }
            this._initMyOwnBoolean();
            this._initProfileId();
        });
    }

    private _initMyOwnBoolean(): void {
        this.isMyOwn = ObjectUtils.isEmpty(this.profileId);
    }

    private _initProfileUser(): void {
        if (this.profileId) {
            this.userService.getUserByProfileId(this.profileId).subscribe({

            });
        }

    }

}