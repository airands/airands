import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {Plugins} from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";
import {LoginService} from "../../../../services/auth/login.service";
import {OrderWorkflowModalPage} from "../../../../components/modals/order-workflow-modal/order-workflow-modal.page";
import {AirandsLoginComponent} from "../modal/airands-login/airands-login.component";

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

    private _isIos: boolean = false;

    constructor(
        private navCtrl: NavController,
        private modalController: ModalController,
        private loginService: LoginService,
    ) {
        Plugins.Device.getInfo().then((value) => {
            this._isIos = value.platform === 'ios';
        });
    }

    ngOnInit() {
    }

    goHome() {
        this.navCtrl.navigateForward('/home');
    }

    async loginGoogle() {
        await this.loginService.loginGoogle();
        this.goHome();
    }

    loginFacebook() {
        this.loginService.loginFacebook();
        this.goHome();
    }

    loginApple() {
        this.loginService.loginApple();
        this.goHome();
    }

    async loginAirands() {
        const modal = await this.modalController.create({
            component: AirandsLoginComponent,
        });
        return await modal.present();
    }

    get isIos(): boolean {
        return this._isIos;
    }
}
