import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse,
} from 'src';
import {apiTypeKeys, keysToTestFromResponse} from 'src/variables';

/** setBillingAddress
 *
 * Call API to (re)set the taxes into an order
 */
export async function setTaxes(): Promise<IApiReturnObject> {
    const {setTaxes} = apiTypeKeys;
    const options = getApiOptions(setTaxes);
    const url = getApiUrl(setTaxes);
    const fetchRes = await fetchAPI(url, options);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
