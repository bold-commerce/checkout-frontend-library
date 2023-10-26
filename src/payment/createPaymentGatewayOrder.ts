import {
    apiTypeKeys,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    ICreatePaymentGatewayOrderRequest,
    keysToTestFromResponse,
} from 'src';

/** addPayment
 *
 * Adds a new payment to the order.
 *
 * @param {@link ICreatePaymentGatewayOrderRequest} requestBody - create payment gateway order for specific payment gateways.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function createPaymentGatewayOrder(requestBody: ICreatePaymentGatewayOrderRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {createPaymentGatewayOrder} = apiTypeKeys;
    const options = getApiOptions(createPaymentGatewayOrder, requestBody);
    const url = getApiUrl(createPaymentGatewayOrder);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
