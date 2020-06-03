/**
 * API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LocationAddress } from './locationAddress';


export interface CustomerDtoAllOfData { 
    email: string;
    first_name: string;
    last_name: string;
    phone_number?: string;
    auth_provider: string;
    auth_provider_uid?: string;
    avatar_url?: string;
    address?: LocationAddress;
}

