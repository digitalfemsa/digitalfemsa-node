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
import { ChargeRequest } from './charge-request';
// May contain unused imports in some cases
// @ts-ignore
import { CheckoutRequest } from './checkout-request';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerShippingContacts } from './customer-shipping-contacts';
// May contain unused imports in some cases
// @ts-ignore
import { OrderDiscountLinesRequest } from './order-discount-lines-request';
// May contain unused imports in some cases
// @ts-ignore
import { OrderTaxRequest } from './order-tax-request';
// May contain unused imports in some cases
// @ts-ignore
import { OrderUpdateFiscalEntityRequest } from './order-update-fiscal-entity-request';
// May contain unused imports in some cases
// @ts-ignore
import { OrderUpdateRequestCustomerInfo } from './order-update-request-customer-info';
// May contain unused imports in some cases
// @ts-ignore
import { Product } from './product';
// May contain unused imports in some cases
// @ts-ignore
import { ShippingRequest } from './shipping-request';

/**
 * a order
 * @export
 * @interface OrderUpdateRequest
 */
export interface OrderUpdateRequest {
    /**
     * 
     * @type {Array<ChargeRequest>}
     * @memberof OrderUpdateRequest
     */
    'charges'?: Array<ChargeRequest>;
    /**
     * 
     * @type {CheckoutRequest}
     * @memberof OrderUpdateRequest
     */
    'checkout'?: CheckoutRequest;
    /**
     * Currency with which the payment will be made. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217)
     * @type {string}
     * @memberof OrderUpdateRequest
     */
    'currency'?: string;
    /**
     * 
     * @type {OrderUpdateRequestCustomerInfo}
     * @memberof OrderUpdateRequest
     */
    'customer_info'?: OrderUpdateRequestCustomerInfo;
    /**
     * List of [discounts](https://developers.femsa.com/v2.1.0/reference/orderscreatediscountline) that are applied to the order. You must have at least one discount.
     * @type {Array<OrderDiscountLinesRequest>}
     * @memberof OrderUpdateRequest
     */
    'discount_lines'?: Array<OrderDiscountLinesRequest>;
    /**
     * 
     * @type {OrderUpdateFiscalEntityRequest}
     * @memberof OrderUpdateRequest
     */
    'fiscal_entity'?: OrderUpdateFiscalEntityRequest;
    /**
     * List of [products](https://developers.femsa.com/v2.1.0/reference/orderscreateproduct) that are sold in the order. You must have at least one product.
     * @type {Array<Product>}
     * @memberof OrderUpdateRequest
     */
    'line_items'?: Array<Product>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderUpdateRequest
     */
    'metadata'?: { [key: string]: string; };
    /**
     * Indicates whether the order charges must be preauthorized
     * @type {boolean}
     * @memberof OrderUpdateRequest
     */
    'pre_authorize'?: boolean;
    /**
     * 
     * @type {CustomerShippingContacts}
     * @memberof OrderUpdateRequest
     */
    'shipping_contact'?: CustomerShippingContacts;
    /**
     * List of [shipping costs](https://developers.femsa.com/v2.1.0/reference/orderscreateshipping). If the online store offers digital products.
     * @type {Array<ShippingRequest>}
     * @memberof OrderUpdateRequest
     */
    'shipping_lines'?: Array<ShippingRequest>;
    /**
     * 
     * @type {Array<OrderTaxRequest>}
     * @memberof OrderUpdateRequest
     */
    'tax_lines'?: Array<OrderTaxRequest>;
}

