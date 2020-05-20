import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Plugins} from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";
import {LoginService} from "../../../../services/auth/login.service";

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

    private _isIos: boolean = false;

    constructor(
        private navCtrl: NavController,
        private loginService: LoginService,
    ) {
        Plugins.Device.getInfo().then((value) => {
            this._isIos = value.platform === 'ios';
        });
    }

    ngOnInit() {
    }

    getStarted() {
        this.navCtrl.navigateForward('/login/getting-started')
    }

    loginGoogle() {
        this.loginService.loginGoogle();
    }

    loginFacebook() {
        this.loginService.loginFacebook();
    }

    loginApple() {
        this.loginService.loginApple();
    }

    get isIos(): boolean {
        return this._isIos;
    }
}
