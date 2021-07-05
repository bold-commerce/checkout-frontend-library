import {getEnvironment, getShopIdentifier, getPublicOrderId, IApiTypes} from '@src';
import {apiTypes} from '@src/variables';

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
