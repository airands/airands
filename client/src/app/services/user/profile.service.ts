import { Injectable } from '@angular/core';
import {Profile, ProfileAddress, ProfileService as ProfileApi} from "../../../open_api";
import {AuthenticationService} from "../auth/authentication.service";

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
  ) { }

  public updateProfile() {
    this.profileApi.updateProfile(this.profile).subscribe(
        (userDto) => this.authenticationService.setUser(userDto),
        (error) => console.error(error),
    );
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
