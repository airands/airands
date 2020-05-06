import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {NavController} from "@ionic/angular";
import {User} from "../../models/user/user.model";

@Injectable({
    providedIn: 'root'
})
export class IncompleteAddressGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private navController: NavController,
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user: User = this.authenticationService.authUser.value;
        if (user.hasCompleteProfile) {
            this.navController.navigateRoot(['/tabs']);
            return false;
        } else if (!user.hasCompleteName) {
            this.navController.navigateRoot(['/incomplete/first-name']);
            return false;
        } else if (!user.hasCompleteAddress) {
            return true;
        }
    }

}
