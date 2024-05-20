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
 * @interface ChargeResponseRefundsData
 */
export interface ChargeResponseRefundsData {
    /**
     * 
     * @type {number}
     * @memberof ChargeResponseRefundsData
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponseRefundsData
     */
    'auth_code'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeResponseRefundsData
     */
    'created_at': number;
    /**
     * refund expiration date
     * @type {number}
     * @memberof ChargeResponseRefundsData
     */
    'expires_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponseRefundsData
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponseRefundsData
     */
    'object': string;
    /**
     * refund status
     * @type {string}
     * @memberof ChargeResponseRefundsData
     */
    'status'?: string;
}

