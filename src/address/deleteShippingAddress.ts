import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/** deleteShippingAddress
 *
 * Call API to delete the Shipping address to the order
 */
export async function deleteShippingAddress(): Promise<IApiReturnObject> {
    const {deleteShippingAddress} = apiTypeKeys;
    const {keysToTest} = apiTypes.deleteShippingAddress;
    const options = getApiOptions(deleteShippingAddress);
    const url = getApiUrl(deleteShippingAddress);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, keysToTest);
}
