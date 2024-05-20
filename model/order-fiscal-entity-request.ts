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


// May contain unused imports in some cases
// @ts-ignore
import { FiscalEntityAddress } from './fiscal-entity-address';

/**
 * Fiscal entity of the order, Currently it is a purely informative field
 * @export
 * @interface OrderFiscalEntityRequest
 */
export interface OrderFiscalEntityRequest {
    /**
     * 
     * @type {FiscalEntityAddress}
     * @memberof OrderFiscalEntityRequest
     */
    'address': FiscalEntityAddress;
    /**
     * Email of the fiscal entity
     * @type {string}
     * @memberof OrderFiscalEntityRequest
     */
    'email'?: string;
    /**
     * Metadata associated with the fiscal entity
     * @type {{ [key: string]: any; }}
     * @memberof OrderFiscalEntityRequest
     */
    'metadata'?: { [key: string]: any; };
    /**
     * Name of the fiscal entity
     * @type {string}
     * @memberof OrderFiscalEntityRequest
     */
    'name'?: string | null;
    /**
     * Phone of the fiscal entity
     * @type {string}
     * @memberof OrderFiscalEntityRequest
     */
    'phone'?: string;
    /**
     * Tax ID of the fiscal entity
     * @type {string}
     * @memberof OrderFiscalEntityRequest
     */
    'tax_id'?: string | null;
}

