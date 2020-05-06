import {Injectable} from '@angular/core';
import {Profile, ProfileAddress, ProfileService as ProfileApi, UserDto} from "../../../open_api";
import {AuthenticationService} from "../auth/authentication.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    profile: Profile = {
        first_name: null,
        last_name: null,
        address: {
            street_number: null,
            street_name: null,
            unit_number: null,
            city: null,
            province: null,
            postal_code: null,
        },
    };

    constructor(
        private profileApi: ProfileApi,
        private authenticationService: AuthenticationService,
    ) {
    }

    public async updateProfileName() {
        const params = {first_name: this.firstName, last_name: this.lastName};
        return await this.updateProfile(this.profileApi.updateProfileName(params));
    }

    public async updateProfileAddress() {
        return await this.updateProfile(this.profileApi.updateProfileAddress(this.profile.address));
    }

    private updateProfile(observer: Observable<UserDto>) {
        return new Promise((resolve, reject) => {
            observer.subscribe(
                (userDto) => {
                    this.authenticationService.setUser(userDto);
                    resolve(userDto);
                },
                (error) => {
                    console.error(error);
                    reject(error);
                }
            );
        });
    }

    public clean() {
        this.setFirstName(null);
        this.setLastName(null);
        this.setAddress({
            street_number: null,
            street_name: null,
            unit_number: null,
            city: null,
            province: null,
            postal_code: null,
        });
    }

    public setFirstName(value: string) {
        this.profile.first_name = value;
    }

    public setLastName(value: string) {
        this.profile.last_name = value;
    }

    public setAddress(value: ProfileAddress) {
        this.profile.address = value;
    }

    get firstName(): string {
        return this.profile.first_name;
    }

    get lastName(): string {
        return this.profile.last_name;
    }

}
