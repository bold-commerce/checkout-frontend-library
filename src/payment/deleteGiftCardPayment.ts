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
 * # deleteGiftCardPayment
 *
 * Remove gift card payment added to the order
 *
 * @param {string} id - The Id of the Gift Card Payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function deleteGiftCardPayment(id: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {deleteGiftCardPayment} = apiTypeKeys;
    const url = getApiUrl(deleteGiftCardPayment);
    const options = getApiOptions(deleteGiftCardPayment, { id });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.deleteGiftCardPayment;
    return checkApiResponse(fetchRes, keysToTest);
}
