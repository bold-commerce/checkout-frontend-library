import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse
} from 'src';
import {apiTypeKeys, apiTypes, keysToTestFromResponse} from 'src/variables';

/** deleteBillingAddress
 *
 * Call API to delete the Billing address to the order
 */
export async function deleteBillingAddress(): Promise<IApiReturnObject> {
    const {deleteBillingAddress} = apiTypeKeys;
    const {keysToTest} = apiTypes.deleteBillingAddress;
    const options = getApiOptions(deleteBillingAddress);
    const url = getApiUrl(deleteBillingAddress);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, keysToTest);
}
