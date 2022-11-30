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

/** updateShippingAddress
 *
 * Call API to update the Shipping address to the order
 */
export async function updateShippingAddress(requestBody: ISetShippingAddressRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {updateShippingAddress} = apiTypeKeys;
    const options = getApiOptions(updateShippingAddress, requestBody);
    const url = getApiUrl(updateShippingAddress);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
