import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../services/auth/authentication.service";
import {Customer} from "../../../../models/customer/customer.model";
import {DeviceInfo, Plugins} from "@capacitor/core";

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

    customer: Customer = null;
    info: DeviceInfo = null;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.customer.subscribe((value) => {
            this.customer = value;
        });
        Plugins.Device.getInfo().then((value) => {
            this.info = value;
        });
    }

    logout() {
        this.authenticationService.logout();
    }

    get appInfo(): string {
        if (this.info && this.info.appVersion) {
            return `Version ${this.info.appVersion}`;
        }
    }

}
