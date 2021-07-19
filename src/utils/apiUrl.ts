import {getEnvironment, getShopIdentifier, getPublicOrderId, IApiTypes, IApiUrlQueryParams} from 'src';
import {apiTypes} from 'src/variables';

/** getApiUrl
 *
 * returns the formatted string of an url for a specific api
 *
 * @param type type of api that needs to be constructed
 */
export function getApiUrl(type: keyof IApiTypes): string {
    const env = getEnvironment();
    const shopId = getShopIdentifier();
    const publicOrderId = getPublicOrderId();
    const { path } = apiTypes[type] ?? {path: ''};

    return `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}${path}`;
}

export function getApiUrlWithParams(type: keyof IApiTypes, values: IApiUrlQueryParams): string {
    const url = getApiUrl(type);
    const paramsUrl = new URL(url);
    const params = new URLSearchParams();
    Object.keys(values).forEach(key => {
        const valuesKey = key as keyof typeof values;
        params.append(key, values[valuesKey]);
    });
    paramsUrl.search = new URLSearchParams(params).toString();

    return paramsUrl.toString();
}
