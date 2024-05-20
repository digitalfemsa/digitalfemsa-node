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
import { LogsResponseData } from './logs-response-data';

/**
 * logs model
 * @export
 * @interface LogsResponse
 */
export interface LogsResponse {
    /**
     * True, if there are more pages.
     * @type {boolean}
     * @memberof LogsResponse
     */
    'has_more'?: boolean;
    /**
     * The object type
     * @type {string}
     * @memberof LogsResponse
     */
    'object'?: string;
    /**
     * URL of the next page.
     * @type {string}
     * @memberof LogsResponse
     */
    'next_page_url'?: string | null;
    /**
     * Url of the previous page.
     * @type {string}
     * @memberof LogsResponse
     */
    'previous_page_url'?: string | null;
    /**
     * set to page results.
     * @type {Array<LogsResponseData>}
     * @memberof LogsResponse
     */
    'data'?: Array<LogsResponseData> | null;
}

