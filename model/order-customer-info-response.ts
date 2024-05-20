/* tslint:disable */
/* eslint-disable */
/**
 * Femsa API
 * Femsa sdk
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: engineering@femsa.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OrderCustomerInfoResponse
 */
export interface OrderCustomerInfoResponse {
    /**
     * Custom reference
     * @type {string}
     * @memberof OrderCustomerInfoResponse
     */
    'customer_custom_reference'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrderCustomerInfoResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCustomerInfoResponse
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCustomerInfoResponse
     */
    'phone'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderCustomerInfoResponse
     */
    'corporate'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderCustomerInfoResponse
     */
    'object'?: string;
}
