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
 * # getListPayments
 *
 * Use this endpoint to retrieve the list of Payments.
 *
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>}
 */
export async function getPaymentList(numOfRetries = 0): Promise<IApiReturnObject> {
    const {getPaymentList} = apiTypeKeys;
    const url = getApiUrl(getPaymentList);
    const options = getApiOptions(getPaymentList);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.getPaymentList;
    return checkApiResponse(fetchRes, keysToTest);
}
