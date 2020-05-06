import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {User} from "../../models/user/user.model";

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

    user: User;

    constructor(private authenticationService: AuthenticationService) {
        this.user = this.authenticationService.authUser.value;
    }

    ngOnInit() {
    }

    logout() {
        this.authenticationService.logout();
    }

}
