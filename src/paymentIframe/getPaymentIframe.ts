import {apiTypeKeys, baseReturnObject, getApiUrlWithParams, getJwtToken, IApiReturnObject} from 'src';

/**
 *
 * Use this endpoint to retrieve the Payment Isolation Gateway Interface (PIGI) and load into an iframe.
 *
 */
export async function getPaymentIframeUrl(): Promise<IApiReturnObject> {
    const returnObject = {...baseReturnObject};
    const {getPaymentIframe} = apiTypeKeys;
    const url = getApiUrlWithParams(getPaymentIframe, { token: getJwtToken()});
    returnObject.success = true;
    returnObject.response = {data: {url}};
    return returnObject;
}
