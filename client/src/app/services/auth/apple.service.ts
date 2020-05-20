import {Injectable} from "@angular/core";
import {Capacitor, Plugins} from "@capacitor/core";

export interface AppleLoginData {
    email: string;
    givenName: string;
    familyName: string;
    identityToken: string;
    authorizationCode: string;
    user: string;
}

interface AppleLoginResponse {
    response: AppleLoginData;
}

@Injectable({ providedIn: 'root' })
export class AppleService {
    async login(): Promise<AppleLoginResponse> {
        if (Capacitor.isPluginAvailable('SignInWithApple')) {
            return (await Plugins.SignInWithApple.Authorize()) as AppleLoginResponse;
        }
    }
}
