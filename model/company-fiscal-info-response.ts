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
import { CompanyFiscalInfoAddressResponse } from './company-fiscal-info-address-response';

/**
 * Company fiscal info model
 * @export
 * @interface CompanyFiscalInfoResponse
 */
export interface CompanyFiscalInfoResponse {
    /**
     * The resource\'s type
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'object'?: CompanyFiscalInfoResponseObjectEnum;
    /**
     * Tax ID of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'tax_id'?: string;
    /**
     * Legal name of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'legal_entity_name'?: string;
    /**
     * Business type of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'business_type'?: string;
    /**
     * Phone number of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'phone'?: string;
    /**
     * Business type if \'persona_fisica\'
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    'physical_person_business_type'?: string;
    /**
     * 
     * @type {CompanyFiscalInfoAddressResponse}
     * @memberof CompanyFiscalInfoResponse
     */
    'address'?: CompanyFiscalInfoAddressResponse;
}

export const CompanyFiscalInfoResponseObjectEnum = {
    fiscalInfo: 'fiscal_info'
} as const;

export type CompanyFiscalInfoResponseObjectEnum = typeof CompanyFiscalInfoResponseObjectEnum[keyof typeof CompanyFiscalInfoResponseObjectEnum];


