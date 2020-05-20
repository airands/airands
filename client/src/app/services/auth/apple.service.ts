import {Injectable} from "@angular/core";
import {Plugins} from "@capacitor/core";

@Injectable({ providedIn: 'root' })
export class AppleService {
    async login() {
        if ((await Plugins.Device.getInfo()).platform === 'ios') {
            const response = await Plugins.SignInWithApple.Authorize();
            console.log(response);
        }
    }
}
