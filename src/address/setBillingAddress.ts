import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetBillingAddressRequest,
    checkApiResponse
} from 'src';
import {apiTypeKeys} from 'src/variables';

/** setBillingAddress
 *
 * Call API to set the Billing address to the order
 */
export async function setBillingAddress(requestBody: ISetBillingAddressRequest): Promise<IApiReturnObject> {
    const {setBillingAddress} = apiTypeKeys;
    const options = getApiOptions(setBillingAddress, requestBody);
    const url = getApiUrl(setBillingAddress);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, ['data', 'application_state']);
}
