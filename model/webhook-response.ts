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
 * webhooks model
 * @export
 * @interface WebhookResponse
 */
export interface WebhookResponse {
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResponse
     */
    'deleted'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResponse
     */
    'development_enabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResponse
     */
    'livemode'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    'object'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResponse
     */
    'production_enabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    'status'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookResponse
     */
    'subscribed_events'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResponse
     */
    'synchronous'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponse
     */
    'url'?: string;
}

