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
import { Order } from './order';
import { BaseResponse } from './baseResponse';
import { BaseResponseError } from './baseResponseError';
import { OrderResponseAllOf } from './orderResponseAllOf';
import { StatusCode } from './statusCode';


export interface OrderResponse { 
    status: StatusCode;
    error: BaseResponseError;
    data?: Order;
}

