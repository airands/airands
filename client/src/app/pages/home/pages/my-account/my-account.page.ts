import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../services/auth/authentication.service";
import {Customer} from "../../../../models/customer/customer.model";

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

    customer: Customer = null;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.customer.subscribe((value) => {
            this.customer = value;
        });
    }

    logout() {
        this.authenticationService.logout();
    }

}
