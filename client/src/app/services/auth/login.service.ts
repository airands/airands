import {Injectable} from "@angular/core";
import {FacebookService} from "./facebook.service";
import {GoogleService} from "./google.service";
import {AppleService} from "./apple.service";
import {AppPlatform, CustomerDto, CustomersService, SocialPlatform} from "../../../open_api";
import {Plugins} from "@capacitor/core";

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(
        private facebookService: FacebookService,
        private googleService: GoogleService,
        private appleService: AppleService,
        private customersService: CustomersService,
    ) {
    }

    async logout(platform: SocialPlatform) {
        switch (platform)
        {
            case "apple":
                return;
                // TODO this.appleService.logout();
            case "google":
                return await this.googleService.logout();
            case "facebook":
                return;
                // TODO return await this.facebookService.logout();
            default:
                throw new Error(`Unrecognized or empty platform on logout: ${platform}`);
        }
    }

    async loginGoogle() {
        const response = await this.googleService.login();
        const userResponse = await this.postRegistration(response.authentication.idToken, {
            auth_provider: 'google',
            auth_provider_uid: response.id,
            email: response.email,
            first_name: response.givenName,
            last_name: response.familyName,
        });
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

    private async postRegistration(authProviderToken: string, customerDto: CustomerDto) {
        const device = await Plugins.Device.getInfo();

        return await this.customersService.createUser({
            user_data: customerDto,
            auth_provider_token: authProviderToken,
            app_platform: device.platform as AppPlatform,
        }).toPromise();
    }

}
