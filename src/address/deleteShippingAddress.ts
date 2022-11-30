import {
    apiTypeKeys,
    apiTypes,
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse
} from 'src';

/** deleteShippingAddress
 *
 * Call API to delete the Shipping address to the order
 */
export async function deleteShippingAddress(numOfRetries = 0): Promise<IApiReturnObject> {
    const {deleteShippingAddress} = apiTypeKeys;
    const {keysToTest} = apiTypes.deleteShippingAddress;
    const options = getApiOptions(deleteShippingAddress);
    const url = getApiUrl(deleteShippingAddress);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, keysToTest);
}
