import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Plugins} from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

    constructor(
        private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    getStarted() {
        this.navCtrl.navigateForward('/login/getting-started')
    }
}
