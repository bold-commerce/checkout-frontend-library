import {
    apiTypeKeys,
    apiTypes,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';

/**
 * # deleteCustomer
 *
 * Remove customer from order
 *
 */
export async function deleteCustomer(numOfRetries = 0): Promise<IApiReturnObject> {
    const {deleteCustomer} = apiTypeKeys;
    const url = getApiUrl(deleteCustomer);
    const options = getApiOptions(deleteCustomer);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.deleteCustomer;
    return checkApiResponse(fetchRes, keysToTest);
}
