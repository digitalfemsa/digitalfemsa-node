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
 * create new taxes for an existing order
 * @export
 * @interface OrderTaxRequest
 */
export interface OrderTaxRequest {
    /**
     * The amount to be collected for tax in cents
     * @type {number}
     * @memberof OrderTaxRequest
     */
    'amount': number;
    /**
     * description or tax\'s name
     * @type {string}
     * @memberof OrderTaxRequest
     */
    'description': string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderTaxRequest
     */
    'metadata'?: { [key: string]: any; };
}

