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
import { GetTransfersResponse } from '../model';
// @ts-ignore
import { ModelError } from '../model';
// @ts-ignore
import { TransferResponse } from '../model';
/**
 * TransfersApi - axios parameter creator
 * @export
 */
export const TransfersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the details of a Transfer
         * @summary Get Transfer
         * @param {string} id Identifier of the resource
         * @param {GetTransferAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransfer: async (id: string, acceptLanguage?: GetTransferAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTransfer', 'id', id)
            const localVarPath = `/transfers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * Get transfers details in the form of a list
         * @summary Get a list of transfers
         * @param {GetTransfersAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransfers: async (acceptLanguage?: GetTransfersAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/transfers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }

            if (previous !== undefined) {
                localVarQueryParameter['previous'] = previous;
            }

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
    }
};

/**
 * TransfersApi - functional programming interface
 * @export
 */
export const TransfersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransfersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the details of a Transfer
         * @summary Get Transfer
         * @param {string} id Identifier of the resource
         * @param {GetTransferAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransfer(id: string, acceptLanguage?: GetTransferAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransferResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransfer(id, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TransfersApi.getTransfer']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get transfers details in the form of a list
         * @summary Get a list of transfers
         * @param {GetTransfersAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransfers(acceptLanguage?: GetTransfersAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransfersResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransfers(acceptLanguage, xChildCompanyId, limit, search, next, previous, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['TransfersApi.getTransfers']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * TransfersApi - factory interface
 * @export
 */
export const TransfersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransfersApiFp(configuration)
    return {
        /**
         * Get the details of a Transfer
         * @summary Get Transfer
         * @param {string} id Identifier of the resource
         * @param {GetTransferAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransfer(id: string, acceptLanguage?: GetTransferAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<TransferResponse> {
            return localVarFp.getTransfer(id, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get transfers details in the form of a list
         * @summary Get a list of transfers
         * @param {GetTransfersAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransfers(acceptLanguage?: GetTransfersAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: any): AxiosPromise<GetTransfersResponse> {
            return localVarFp.getTransfers(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransfersApi - interface
 * @export
 * @interface TransfersApi
 */
export interface TransfersApiInterface {
    /**
     * Get the details of a Transfer
     * @summary Get Transfer
     * @param {string} id Identifier of the resource
     * @param {GetTransferAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    getTransfer(id: string, acceptLanguage?: GetTransferAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<TransferResponse>;

    /**
     * Get transfers details in the form of a list
     * @summary Get a list of transfers
     * @param {GetTransfersAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApiInterface
     */
    getTransfers(acceptLanguage?: GetTransfersAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): AxiosPromise<GetTransfersResponse>;

}

/**
 * TransfersApi - object-oriented interface
 * @export
 * @class TransfersApi
 * @extends {BaseAPI}
 */
export class TransfersApi extends BaseAPI implements TransfersApiInterface {
    /**
     * Get the details of a Transfer
     * @summary Get Transfer
     * @param {string} id Identifier of the resource
     * @param {GetTransferAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApi
     */
    public getTransfer(id: string, acceptLanguage?: GetTransferAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return TransfersApiFp(this.configuration).getTransfer(id, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get transfers details in the form of a list
     * @summary Get a list of transfers
     * @param {GetTransfersAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransfersApi
     */
    public getTransfers(acceptLanguage?: GetTransfersAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig) {
        return TransfersApiFp(this.configuration).getTransfers(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetTransferAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetTransferAcceptLanguageEnum = typeof GetTransferAcceptLanguageEnum[keyof typeof GetTransferAcceptLanguageEnum];
/**
 * @export
 */
export const GetTransfersAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetTransfersAcceptLanguageEnum = typeof GetTransfersAcceptLanguageEnum[keyof typeof GetTransfersAcceptLanguageEnum];