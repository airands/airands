import {Injectable} from "@angular/core";
import {FacebookService} from "./facebook.service";
import {GoogleService} from "./google.service";
import {AppleService} from "./apple.service";

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
        const response = await this.googleService.login();
        console.log(response);
    }

    async loginFacebook() {
        await this.facebookService.login();
        const response = await this.facebookService.getProfile();
        console.log(response);
    }

    async loginApple() {
        const response = await this.appleService.login();
        console.log(response.response);
    }

}
