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
 * @interface UpdateProduct
 */
export interface UpdateProduct {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof UpdateProduct
     */
    'antifraud_info'?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof UpdateProduct
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProduct
     */
    'sku'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProduct
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateProduct
     */
    'unit_price'?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateProduct
     */
    'quantity'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateProduct
     */
    'tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateProduct
     */
    'brand'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateProduct
     */
    'metadata'?: { [key: string]: string; };
}

