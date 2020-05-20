import {Injectable} from "@angular/core";
import {AccessToken, FacebookLogin} from "@rdlabo/capacitor-facebook-login";
import {Plugins} from "@capacitor/core";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class FacebookService {

    private FBLogin: typeof FacebookLogin = Plugins.FacebookLogin as typeof FacebookLogin;

    private accessToken: AccessToken;

    constructor(private http: HttpClient) {
        this.FBLogin.getCurrentAccessToken().then((response) => {
            this.accessToken = response.accessToken;
        });
    }

    async login() {
        if (!this.accessToken) {
            const response = await this.FBLogin.login({permissions: ['public_profile', 'email']});
            this.accessToken = response.accessToken;
        }
    }

    async getProfile() {
        if (this.accessToken) {
            this.http.get(`https://graph.facebook.com/me?fields=first_name,last_name,email,picture.width(400).height(400)&access_token=${this.accessToken.token}`)
                .subscribe((data) => {
                    console.log(data);
                });
        }
    }

    get isLoggedIn() {
        return Boolean(this.accessToken);
    }

}
