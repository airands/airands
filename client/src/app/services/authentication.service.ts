import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {Platform, ToastController} from "@ionic/angular";
import {BehaviorSubject} from "rxjs";
import {SessionsService} from "../../open_api";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    authState = new BehaviorSubject(false);

    constructor(
        private router: Router,
        private storage: Storage,
        private platform: Platform,
        private sessionsService: SessionsService,
        public toastController: ToastController,
    ) {
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }

    ifLoggedIn() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.authState.next(false);
            }
        });
    }

    login() {
        this.sessionsService.sessionsPost({
            confirmation_pin: '1234',
            phone_number: 7789869397,
        }).subscribe((value) => {
            console.log(value);
        })


        const dummyResponse = {
            user_id: '007',
            user_name: 'levi',
        };

        this.storage.set('USER_INFO', dummyResponse).then((response) => {
            this.router.navigate(['tabs']);
            this.authState.next(true);
        });
    }

    logout() {
        this.storage.remove('USER_INFO').then(() => {
            this.router.navigate(['login']);
            this.authState.next(false);
        });
    }

    isAuthenticated() {
        return this.authState.value;
    }
}
