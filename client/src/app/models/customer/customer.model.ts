import {CustomerDto} from "../../../open_api";

type SocialProviders = "google" | "facebook" | "apple";

export class Customer {

    private readonly _email: string;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _authProvider: SocialProviders;
    private readonly _avatarUrl: string;

    constructor(dto: CustomerDto) {
        this._email = dto.email;
        this._firstName = dto.first_name;
        this._lastName = dto.last_name;
        this._authProvider = dto.auth_provider as SocialProviders;
        this._avatarUrl = dto.avatar_url;
    }

    get email(): string {
        return this._email;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get authProvider(): "google" | "facebook" | "apple" {
        return this._authProvider;
    }

    // TODO
    get avatarUrl(): string {
        return 'https://dev2.airands.ca' + this._avatarUrl;
    }
}
