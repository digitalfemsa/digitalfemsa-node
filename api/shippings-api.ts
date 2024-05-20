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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ModelError } from '../model';
// @ts-ignore
import { ShippingOrderResponse } from '../model';
// @ts-ignore
import { ShippingRequest } from '../model';
/**
 * ShippingsApi - axios parameter creator
 * @export
 */
export const ShippingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create new shipping for an existing orden
         * @summary Create Shipping
         * @param {string} id Identifier of the resource
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersCreateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersCreateShipping: async (id: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('ordersCreateShipping', 'id', id)
            // verify required parameter 'shippingRequest' is not null or undefined
            assertParamExists('ordersCreateShipping', 'shippingRequest', shippingRequest)
            const localVarPath = `/orders/{id}/shipping_lines`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (xChildCompanyId != null) {
                localVarHeaderParameter['X-Child-Company-Id'] = String(xChildCompanyId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(shippingRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete shipping
         * @summary Delete Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {OrdersDeleteShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersDeleteShipping: async (id: string, shippingId: string, acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('ordersDeleteShipping', 'id', id)
            // verify required parameter 'shippingId' is not null or undefined
            assertParamExists('ordersDeleteShipping', 'shippingId', shippingId)
            const localVarPath = `/orders/{id}/shipping_lines/{shipping_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"shipping_id"}}`, encodeURIComponent(String(shippingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (xChildCompanyId != null) {
                localVarHeaderParameter['X-Child-Company-Id'] = String(xChildCompanyId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update existing shipping for an existing orden
         * @summary Update Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersUpdateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersUpdateShipping: async (id: string, shippingId: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('ordersUpdateShipping', 'id', id)
            // verify required parameter 'shippingId' is not null or undefined
            assertParamExists('ordersUpdateShipping', 'shippingId', shippingId)
            // verify required parameter 'shippingRequest' is not null or undefined
            assertParamExists('ordersUpdateShipping', 'shippingRequest', shippingRequest)
            const localVarPath = `/orders/{id}/shipping_lines/{shipping_id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"shipping_id"}}`, encodeURIComponent(String(shippingId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (xChildCompanyId != null) {
                localVarHeaderParameter['X-Child-Company-Id'] = String(xChildCompanyId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(shippingRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShippingsApi - functional programming interface
 * @export
 */
export const ShippingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShippingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create new shipping for an existing orden
         * @summary Create Shipping
         * @param {string} id Identifier of the resource
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersCreateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersCreateShipping(id: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingOrderResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersCreateShipping(id, shippingRequest, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ShippingsApi.ordersCreateShipping']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Delete shipping
         * @summary Delete Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {OrdersDeleteShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersDeleteShipping(id: string, shippingId: string, acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingOrderResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersDeleteShipping(id, shippingId, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ShippingsApi.ordersDeleteShipping']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Update existing shipping for an existing orden
         * @summary Update Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersUpdateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ordersUpdateShipping(id: string, shippingId: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShippingOrderResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ordersUpdateShipping(id, shippingId, shippingRequest, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ShippingsApi.ordersUpdateShipping']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ShippingsApi - factory interface
 * @export
 */
export const ShippingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShippingsApiFp(configuration)
    return {
        /**
         * Create new shipping for an existing orden
         * @summary Create Shipping
         * @param {string} id Identifier of the resource
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersCreateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersCreateShipping(id: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<ShippingOrderResponse> {
            return localVarFp.ordersCreateShipping(id, shippingRequest, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete shipping
         * @summary Delete Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {OrdersDeleteShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersDeleteShipping(id: string, shippingId: string, acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<ShippingOrderResponse> {
            return localVarFp.ordersDeleteShipping(id, shippingId, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Update existing shipping for an existing orden
         * @summary Update Shipping
         * @param {string} id Identifier of the resource
         * @param {string} shippingId identifier
         * @param {ShippingRequest} shippingRequest requested field for a shipping
         * @param {OrdersUpdateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ordersUpdateShipping(id: string, shippingId: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<ShippingOrderResponse> {
            return localVarFp.ordersUpdateShipping(id, shippingId, shippingRequest, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ShippingsApi - interface
 * @export
 * @interface ShippingsApi
 */
export interface ShippingsApiInterface {
    /**
     * Create new shipping for an existing orden
     * @summary Create Shipping
     * @param {string} id Identifier of the resource
     * @param {ShippingRequest} shippingRequest requested field for a shipping
     * @param {OrdersCreateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApiInterface
     */
    ordersCreateShipping(id: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ShippingOrderResponse>;

    /**
     * Delete shipping
     * @summary Delete Shipping
     * @param {string} id Identifier of the resource
     * @param {string} shippingId identifier
     * @param {OrdersDeleteShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApiInterface
     */
    ordersDeleteShipping(id: string, shippingId: string, acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ShippingOrderResponse>;

    /**
     * Update existing shipping for an existing orden
     * @summary Update Shipping
     * @param {string} id Identifier of the resource
     * @param {string} shippingId identifier
     * @param {ShippingRequest} shippingRequest requested field for a shipping
     * @param {OrdersUpdateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApiInterface
     */
    ordersUpdateShipping(id: string, shippingId: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<ShippingOrderResponse>;

}

/**
 * ShippingsApi - object-oriented interface
 * @export
 * @class ShippingsApi
 * @extends {BaseAPI}
 */
export class ShippingsApi extends BaseAPI implements ShippingsApiInterface {
    /**
     * Create new shipping for an existing orden
     * @summary Create Shipping
     * @param {string} id Identifier of the resource
     * @param {ShippingRequest} shippingRequest requested field for a shipping
     * @param {OrdersCreateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApi
     */
    public ordersCreateShipping(id: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return ShippingsApiFp(this.configuration).ordersCreateShipping(id, shippingRequest, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete shipping
     * @summary Delete Shipping
     * @param {string} id Identifier of the resource
     * @param {string} shippingId identifier
     * @param {OrdersDeleteShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApi
     */
    public ordersDeleteShipping(id: string, shippingId: string, acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return ShippingsApiFp(this.configuration).ordersDeleteShipping(id, shippingId, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update existing shipping for an existing orden
     * @summary Update Shipping
     * @param {string} id Identifier of the resource
     * @param {string} shippingId identifier
     * @param {ShippingRequest} shippingRequest requested field for a shipping
     * @param {OrdersUpdateShippingAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShippingsApi
     */
    public ordersUpdateShipping(id: string, shippingId: string, shippingRequest: ShippingRequest, acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return ShippingsApiFp(this.configuration).ordersUpdateShipping(id, shippingId, shippingRequest, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const OrdersCreateShippingAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type OrdersCreateShippingAcceptLanguageEnum = typeof OrdersCreateShippingAcceptLanguageEnum[keyof typeof OrdersCreateShippingAcceptLanguageEnum];
/**
 * @export
 */
export const OrdersDeleteShippingAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type OrdersDeleteShippingAcceptLanguageEnum = typeof OrdersDeleteShippingAcceptLanguageEnum[keyof typeof OrdersDeleteShippingAcceptLanguageEnum];
/**
 * @export
 */
export const OrdersUpdateShippingAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type OrdersUpdateShippingAcceptLanguageEnum = typeof OrdersUpdateShippingAcceptLanguageEnum[keyof typeof OrdersUpdateShippingAcceptLanguageEnum];
