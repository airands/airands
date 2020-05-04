import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {CachedUserInfo} from "../../interfaces/auth";

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

    user: CachedUserInfo = {
        id: null,
        phone_number: null,
        cacheExpiry: null,
    };

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.getUserInfo()
            .then((userInfo) => this.user = userInfo);
    }

    ngOnInit() {
    }

    logout() {
        this.authenticationService.logout();
    }

}
