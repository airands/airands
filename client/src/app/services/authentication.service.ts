import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";
import {NavController, Platform} from "@ionic/angular";
import {BehaviorSubject} from "rxjs";
import {PhoneConfirmation, SessionService, UserDto} from "../../open_api";
import {CachedUserInfo} from "../interfaces/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    USER_INFO_KEY = 'USER_INFO';

    authState = new BehaviorSubject(false);

    constructor(
        private navController: NavController,
        private storage: Storage,
        private platform: Platform,
        private sessionService: SessionService,
    ) {
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }

    isAuthenticated() {
        return this.authState.value;
    }

    ifLoggedIn() {
        this.getUserInfo().then((userInfo) => {
            if (!userInfo || !userInfo.cacheExpiry) {
                this.logout();
            } else {
                if (Date.now() >= userInfo.cacheExpiry.valueOf()) {
                    this.sessionService.getCurrentSession().subscribe(
                        (userDto) => {
                            this.setUserInfo(userDto).then(() => this.authState.next(true))
                        },
                        (error) => this.logout());
                } else {
                    this.authState.next(true);
                }
            }
        })
    }

    async login(phoneConfirmation: PhoneConfirmation): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            this.sessionService.authenticate(phoneConfirmation).subscribe(
                (userDto) => {
                    this.setUserInfo(userDto).then(() => {
                        this.navController.navigateForward(['tabs'])
                        this.authState.next(true);
                        resolve(userDto);
                    });
                },
                (error) => reject(error),
            );
        });
    }

    logout() {
        this.setUserInfo(null).then(() => {
            this.authState.next(false);
            this.navController.navigateBack(['login']);
        });
    }

    private async getUserInfo(): Promise<CachedUserInfo | undefined> {
        return await this.storage.get(this.USER_INFO_KEY);
    }

    private async setUserInfo(userDto: UserDto): Promise<void> {
        if (!userDto) {
            return await this.storage.remove(this.USER_INFO_KEY);
        }

        const cachedUserInfo: CachedUserInfo = {
            ...userDto,
            cacheExpiry: new Date(Date.now() + (600 * 1000)),
        };

        return await this.storage.set(this.USER_INFO_KEY, cachedUserInfo);
    }
}
