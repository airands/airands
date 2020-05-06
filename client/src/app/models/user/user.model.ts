import {Profile, ProfileAddress, UserDto} from "../../../open_api";

export class User {

    private readonly _id: string;
    private readonly _phoneNumber: string;
    private readonly _profile: Profile;

    private readonly _hasCompleteProfile: boolean;
    private readonly _hasCompleteName: boolean;
    private readonly _hasCompleteAddress: boolean;
    private readonly _hasCompleteBilling: boolean;

    constructor(userDto: UserDto) {
        this._id = userDto.id;
        this._phoneNumber = userDto.phone_number;
        this._profile = userDto.profile;

        this._hasCompleteProfile = userDto.complete_profile;
        this._hasCompleteName = userDto.complete_name;
        this._hasCompleteAddress = userDto.complete_address;
        this._hasCompleteBilling = userDto.complete_billing;
    }

    get id(): string {
        return this._id;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get formattedAddress(): string {
        const {street_number, street_name, city, province, postal_code} = this.address;
        return `${street_number} ${street_name}, ${city}, ${province} ${postal_code}`;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get lastName(): string {
        return this.profile.last_name;
    }

    get firstName(): string {
        return this.profile.first_name;
    }

    get profile(): Profile {
        return this._profile;
    }

    get address(): ProfileAddress {
        return this.profile.address;
    }

    get hasCompleteProfile(): boolean {
        return this._hasCompleteProfile;
    }

    get hasCompleteName(): boolean {
        return this._hasCompleteName;
    }

    get hasCompleteAddress(): boolean {
        return this._hasCompleteAddress;
    }

    get hasCompleteBilling(): boolean {
        return this._hasCompleteBilling;
    }

}