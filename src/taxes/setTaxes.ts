import {
    apiTypeKeys,
    keysToTestFromResponse,
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse,
} from 'src';

/** setBillingAddress
 *
 * Call API to (re)set the taxes into an order
 */
export async function setTaxes(numOfRetries = 0): Promise<IApiReturnObject> {
    const {setTaxes} = apiTypeKeys;
    const options = getApiOptions(setTaxes);
    const url = getApiUrl(setTaxes);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
