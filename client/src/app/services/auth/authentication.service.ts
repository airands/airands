import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {NavController, Platform} from "@ionic/angular";
import {BehaviorSubject} from "rxjs";
import {PhoneConfirmation, SessionService, UserDto} from "../../../open_api";
import {User} from "../../models/user/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    authUser: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor(
        private navController: NavController,
        private storage: Storage,
        private platform: Platform,
        private sessionService: SessionService,
    ) {
    }

    isAuthenticated(): boolean {
        return Boolean(this.authUser.value);
    }

    verifyLogin(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.sessionService.getCurrentSession().subscribe(
                (userDto) => {
                    this.setUser(userDto);
                    resolve(true);
                },
                (error) => {
                    resolve(false);
                    this.setUser(null);
                }
            );
        })
    }

    async login(phoneConfirmation: PhoneConfirmation): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            this.sessionService.authenticate(phoneConfirmation).subscribe(
                (userDto) => {
                    this.setUser(userDto);
                    resolve(userDto);
                },
                (error) => reject(error),
            );
        });
    }

    logout() {
        this.sessionService.logout().toPromise().finally(() => {
            this.setUser(null);
        });
    }

    setUser(userDto: UserDto): void {
        if (!userDto) {
            this.authUser.next(null);
        } else {
            this.authUser.next(new User(userDto));
        }
    }

}
