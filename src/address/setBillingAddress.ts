import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetBillingAddressRequest,
    checkApiResponse
} from 'src';
import {apiTypeKeys, keysToTestFromResponse} from 'src/variables';

/** setBillingAddress
 *
 * Call API to set the Billing address to the order
 */
export async function setBillingAddress(requestBody: ISetBillingAddressRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {setBillingAddress} = apiTypeKeys;
    const options = getApiOptions(setBillingAddress, requestBody);
    const url = getApiUrl(setBillingAddress);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
