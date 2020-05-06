import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "../../services/auth/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(public authenticationService: AuthenticationService) {
    }

    canActivate(): boolean | Promise<boolean> {
        if (this.authenticationService.isAuthenticated()) {
            return true
        } else {
            return this.authenticationService.verifyLogin();
        }
    }
}
