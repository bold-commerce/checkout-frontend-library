import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetShippingAddressRequest,
    checkApiResponse,
} from 'src';
import {apiTypeKeys, keysToTestFromResponse} from 'src/variables';

/** updateShippingAddress
 *
 * Call API to update the Shipping address to the order
 */
export async function updateShippingAddress(requestBody: ISetShippingAddressRequest): Promise<IApiReturnObject> {
    const {updateShippingAddress} = apiTypeKeys;
    const options = getApiOptions(updateShippingAddress, requestBody);
    const url = getApiUrl(updateShippingAddress);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
