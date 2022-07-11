import {
    apiTypeKeys,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IAddPaymentRequest,
    IApiReturnObject,
    keysToTestFromResponse,
} from 'src';

/** addPayment
 *
 * Adds a new payment to the order.
 *
 * @param {@link IAddPaymentRequest} requestBody - Add Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function addPayment(requestBody: IAddPaymentRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {addPayment} = apiTypeKeys;
    const options = getApiOptions(addPayment, requestBody);
    const url = getApiUrl(addPayment);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
