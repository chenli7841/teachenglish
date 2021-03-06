/* tslint:disable */
/* eslint-disable */
/**
 * server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AddWordRequest
 */
export interface AddWordRequest {
    /**
     * 
     * @type {string}
     * @memberof AddWordRequest
     */
    word?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddWordRequest
     */
    translation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddWordRequest
     */
    explanation?: string | null;
}
/**
 * 
 * @export
 * @interface Word
 */
export interface Word {
    /**
     * 
     * @type {string}
     * @memberof Word
     */
    text?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Word
     */
    translation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Word
     */
    explanation?: string | null;
}

/**
 * PracticeApi - axios parameter creator
 * @export
 */
export const PracticeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddWordRequest} [addWordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPracticeAddwordPost: async (addWordRequest?: AddWordRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/practice/addword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof addWordRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(addWordRequest !== undefined ? addWordRequest : {})
                : (addWordRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPracticeGetwordsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/practice/getwords`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PracticeApi - functional programming interface
 * @export
 */
export const PracticeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddWordRequest} [addWordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPracticeAddwordPost(addWordRequest?: AddWordRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await PracticeApiAxiosParamCreator(configuration).apiPracticeAddwordPost(addWordRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiPracticeGetwordsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Word>>> {
            const localVarAxiosArgs = await PracticeApiAxiosParamCreator(configuration).apiPracticeGetwordsGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PracticeApi - factory interface
 * @export
 */
export const PracticeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AddWordRequest} [addWordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPracticeAddwordPost(addWordRequest?: AddWordRequest, options?: any): AxiosPromise<void> {
            return PracticeApiFp(configuration).apiPracticeAddwordPost(addWordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiPracticeGetwordsGet(options?: any): AxiosPromise<Array<Word>> {
            return PracticeApiFp(configuration).apiPracticeGetwordsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PracticeApi - object-oriented interface
 * @export
 * @class PracticeApi
 * @extends {BaseAPI}
 */
export class PracticeApi extends BaseAPI {
    /**
     * 
     * @param {AddWordRequest} [addWordRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PracticeApi
     */
    public apiPracticeAddwordPost(addWordRequest?: AddWordRequest, options?: any) {
        return PracticeApiFp(this.configuration).apiPracticeAddwordPost(addWordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PracticeApi
     */
    public apiPracticeGetwordsGet(options?: any) {
        return PracticeApiFp(this.configuration).apiPracticeGetwordsGet(options).then((request) => request(this.axios, this.basePath));
    }
}


