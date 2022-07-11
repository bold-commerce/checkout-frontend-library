import {
    apiTypeKeys,
    apiTypes,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IDeletePaymentRequest,
    IApiReturnObject
} from 'src';

/**
 * # deletePayment
 *
 * Remove payment added to the order
 *
 * @param {@link IDeletePaymentRequest} requestBody - Delete Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function deletePayment(requestBody: IDeletePaymentRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {deletePayment} = apiTypeKeys;
    const url = getApiUrl(deletePayment);
    const options = getApiOptions(deletePayment, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.deletePayment;
    return checkApiResponse(fetchRes, keysToTest);
}
