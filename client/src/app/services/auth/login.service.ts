import {Injectable} from "@angular/core";
import {FacebookService} from "./facebook.service";
import {GoogleService} from "./google.service";
import {AppleService} from "./apple.service";
import {Plugins} from "@capacitor/core";

enum SocialLoginType {
    Google,
    Facebook,
    Apple,
}

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(
        private facebookService: FacebookService,
        private googleService: GoogleService,
        private appleService: AppleService,
    ) {
    }

    async loginGoogle() {
        await this.googleService.login();
    }

    async loginFacebook() {
        await this.facebookService.login();
        await this.facebookService.getProfile();
    }

    async loginApple() {
        await this.appleService.login();
    }

}
