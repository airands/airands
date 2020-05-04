import {UserDto} from "../../open_api";

export interface CachedUserInfo extends UserDto {
    cacheExpiry: Date;
}