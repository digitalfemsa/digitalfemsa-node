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
 * [Checkout](https://developers.femsa.com/v2.1.0/reference/payment-link) details 
 * @export
 * @interface CheckoutRequest
 */
export interface CheckoutRequest {
    /**
     * Are the payment methods available for this link
     * @type {Array<string>}
     * @memberof CheckoutRequest
     */
    'allowed_payment_methods': Array<string>;
    /**
     * Unix timestamp of checkout expiration
     * @type {number}
     * @memberof CheckoutRequest
     */
    'expires_at'?: number;
    /**
     * Redirection url back to the site in case of failed payment, applies only to HostedPayment.
     * @type {string}
     * @memberof CheckoutRequest
     */
    'failure_url'?: string;
    /**
     * Reason for payment
     * @type {string}
     * @memberof CheckoutRequest
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CheckoutRequest
     */
    'on_demand_enabled'?: boolean;
    /**
     * Redirection url back to the site in case of successful payment, applies only to HostedPayment
     * @type {string}
     * @memberof CheckoutRequest
     */
    'success_url'?: string;
    /**
     * This field represents the type of checkout
     * @type {string}
     * @memberof CheckoutRequest
     */
    'type'?: string;
}

