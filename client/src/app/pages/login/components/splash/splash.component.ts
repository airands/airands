import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

    constructor(
        private navCtrl: NavController,
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            console.log(user);
        })
    }

    signInGoogle() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signInFb() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut() {
        this.authService.signOut();
    }

    public goNext() {
        this.navCtrl.navigateForward('/login/phone')
    }
}
