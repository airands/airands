import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {NavController} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private navController: NavController,
    ) {
    }

    async canActivate(route, state): Promise<boolean> {
        return true;
        if (this.authenticationService.isAuthenticated()) {
            return true;
        } else if (await this.authenticationService.verifyLogin()) {
            return true;
        } else {
            this.navController.navigateBack(['/login']);
            return false;
        }
    }
}
