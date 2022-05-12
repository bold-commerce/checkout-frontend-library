import {
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    checkApiResponse
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 *
 * Retrieve the shipping lines available for an order
 *
 */
export async function getShippingLines(numOfRetries = 0): Promise<IApiReturnObject> {
    const {getShippingLines} = apiTypeKeys;
    const url = getApiUrl(getShippingLines);
    const options = getApiOptions(getShippingLines);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.getShippingLines;
    return checkApiResponse(fetchRes, keysToTest);
}
