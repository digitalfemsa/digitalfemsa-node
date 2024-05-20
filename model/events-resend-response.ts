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
 * event model
 * @export
 * @interface EventsResendResponse
 */
export interface EventsResendResponse {
    /**
     * 
     * @type {number}
     * @memberof EventsResendResponse
     */
    'failed_attempts'?: number;
    /**
     * 
     * @type {string}
     * @memberof EventsResendResponse
     */
    'id'?: string;
    /**
     * 
     * @type {number}
     * @memberof EventsResendResponse
     */
    'last_attempted_at'?: number;
    /**
     * 
     * @type {number}
     * @memberof EventsResendResponse
     */
    'last_http_response_status'?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EventsResendResponse
     */
    'response_data'?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof EventsResendResponse
     */
    'url'?: string;
}

