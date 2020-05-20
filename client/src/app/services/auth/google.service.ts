import {Injectable} from "@angular/core";
import {Plugins} from "@capacitor/core";

@Injectable({ providedIn: 'root' })
export class GoogleService {

    async login() {
        const user = await Plugins.GoogleAuth.signIn();
        console.log(user);
    }

}
