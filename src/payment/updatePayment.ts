import {
    apiTypeKeys,
    apiTypes,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IUpdatePaymentRequest,
    IApiReturnObject
} from 'src';

/**
 * # updatePayment
 *
 * update a Payment added to the order
 *
 * @param {@link IUpdatePaymentRequest} requestBody - Update Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function updatePayment(requestBody: IUpdatePaymentRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {updatePayment} = apiTypeKeys;
    const url = getApiUrl(updatePayment);
    const options = getApiOptions(updatePayment, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.updatePayment;
    return checkApiResponse(fetchRes, keysToTest);
}
