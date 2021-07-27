import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetShippingAddressRequest,
    checkApiResponse,
} from 'src';
import {apiTypeKeys, keysToTestFromResponse} from 'src/variables';

/** setShippingAddress
 *
 * Call API to set the Shipping address to the order
 */
export async function setShippingAddress(requestBody: ISetShippingAddressRequest): Promise<IApiReturnObject> {
    const {setShippingAddress} = apiTypeKeys;
    const options = getApiOptions(setShippingAddress, requestBody);
    const url = getApiUrl(setShippingAddress);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
