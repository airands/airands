import {Injectable} from "@angular/core";
import {Plugins} from "@capacitor/core";

export interface GoogleAuthenticationData {
    accessToken: string;
    idToken: string;
    refreshToken: string;
}

export interface GoogleLoginResponse {
    authentication: GoogleAuthenticationData;
    imageUrl: string;
    email: string;
    givenName: string;
    familyName: string;
    name: string;
    id: string;
    serverAuthCode: string;
}

@Injectable({ providedIn: 'root' })
export class GoogleService {

    async login(): Promise<GoogleLoginResponse> {
        return (await Plugins.GoogleAuth.signIn()) as GoogleLoginResponse;
    }

}
