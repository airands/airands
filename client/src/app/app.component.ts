import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthenticationService} from "./services/auth/authentication.service";
import {Router} from "@angular/router";
import {Capacitor, KeyboardResize, Plugins} from "@capacitor/core";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private router: Router,
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
                if (state) {
                    this.router.navigate(['tabs']);
                } else {
                    this.router.navigate(['login']);
                }
            });
        });
    }
}
