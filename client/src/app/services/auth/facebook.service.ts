import {Injectable} from "@angular/core";
import {AccessToken, FacebookLogin} from "@rdlabo/capacitor-facebook-login";
import {Plugins} from "@capacitor/core";
import {HttpClient} from "@angular/common/http";

export interface FacebookLoginResponse {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    picture: any;
}

@Injectable({ providedIn: 'root' })
export class FacebookService {

    private FBLogin: typeof FacebookLogin = Plugins.FacebookLogin as typeof FacebookLogin;

    private accessToken: AccessToken;

    constructor(private http: HttpClient) {
    }

    async login(): Promise<FacebookLoginResponse> {
        if (!this.accessToken) {
            const response = await this.FBLogin.login({permissions: ['public_profile', 'email']});

            if (response.accessToken) {
                this.accessToken = response.accessToken;
                return this.getProfile();
            }
        }
    }

    async getProfile(): Promise<FacebookLoginResponse> {
        const url = `https://graph.facebook.com/me?fields=first_name,last_name,email,picture.width(400).height(400)&access_token=${this.accessToken.token}`;
        if (this.accessToken) {
            return (await this.http.get(url).toPromise()) as FacebookLoginResponse;
        }
    }

    get isLoggedIn() {
        return Boolean(this.accessToken);
    }

}
