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
 * a webhook
 * @export
 * @interface WebhookRequest
 */
export interface WebhookRequest {
    /**
     * Here you must place the URL of your Webhook remember that you must program what you will do with the events received. Also do not forget to handle the HTTPS protocol for greater security.
     * @type {string}
     * @memberof WebhookRequest
     */
    'url': string;
    /**
     * It is a value that allows to decide if the events will be synchronous or asynchronous. We recommend asynchronous = false
     * @type {boolean}
     * @memberof WebhookRequest
     */
    'synchronous': boolean;
}

