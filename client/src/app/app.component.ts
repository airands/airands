import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthenticationService} from "./services/auth/authentication.service";
import {Capacitor, KeyboardResize, Plugins} from "@capacitor/core";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    isRouting = false;

    constructor(
        private navController: NavController,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            if (Capacitor.isPluginAvailable("Keyboard")) {
                Plugins.Keyboard.setResizeMode({ mode: KeyboardResize.None });
            }

            this.authenticationService.authUser.subscribe((state) => {
                if (!state) {
                    this.navController.pop();
                }
            });
        });
    }
}
