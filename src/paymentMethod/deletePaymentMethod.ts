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
 * # deletePaymentMethod
 *
 * Remove saved payment method
 *
 * @param {@link string} paymentMethodID - Payment Method pyblic ID to delete.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function deletePaymentMethod(paymentMethodID: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {deletePaymentMethod} = apiTypeKeys;
    const url = `${getApiUrl(deletePaymentMethod)}/${paymentMethodID}`;
    const options = getApiOptions(deletePaymentMethod);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.deletePaymentMethod;
    return checkApiResponse(fetchRes, keysToTest);
}