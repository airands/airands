import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {NavController} from "@ionic/angular";
import {User} from "../../models/user/user.model";
import {ProfileService} from "../../services/user/profile.service";

@Injectable({
    providedIn: 'root'
})
export class IncompleteNameGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private navController: NavController,
        private profileService: ProfileService,
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
            if (this.willNavigateToLastName(next) && !Boolean(this.profileService.firstName)) {
                this.navController.navigateRoot(['/incomplete/first-name']);
                return false;
            }
            return true;
        } else if (!user.hasCompleteAddress) {
            this.navController.navigateRoot(['/incomplete/address']);
            return false;
        }
    }

    private willNavigateToFirstName(route: ActivatedRouteSnapshot): boolean {
        return route.url[0].path === 'first-name';
    }

    private willNavigateToLastName(route: ActivatedRouteSnapshot): boolean {
        return route.url[0].path === 'last-name';
    }

}
