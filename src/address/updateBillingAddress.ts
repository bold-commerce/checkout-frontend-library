import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetBillingAddressRequest,
    checkApiResponse
} from 'src';
import {apiTypeKeys, keysToTestFromResponse} from 'src/variables';

/** updateBillingAddress
 *
 * Call API to update the Billing address to the order
 */
export async function updateBillingAddress(requestBody: ISetBillingAddressRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {updateBillingAddress} = apiTypeKeys;
    const options = getApiOptions(updateBillingAddress, requestBody);
    const url = getApiUrl(updateBillingAddress);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
