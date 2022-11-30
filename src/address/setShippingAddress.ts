import {
    apiTypeKeys,
    keysToTestFromResponse,
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetShippingAddressRequest,
    checkApiResponse,
} from 'src';

/** setShippingAddress
 *
 * Call API to set the Shipping address to the order
 */
export async function setShippingAddress(requestBody: ISetShippingAddressRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {setShippingAddress} = apiTypeKeys;
    const options = getApiOptions(setShippingAddress, requestBody);
    const url = getApiUrl(setShippingAddress);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
