import {
    apiTypeKeys,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    IWalletPayCreateOrderRequest,
    keysToTestFromResponse,
} from 'src';

/** walletPayCreateOrder
 *
 * create new order on payment gateway
 *
 * @param {@link IWalletPayCreateOrderRequest} requestBody - create payment gateway order for specific payment gateways.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function walletPayCreateOrder(requestBody: IWalletPayCreateOrderRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {walletPayCreateOrder} = apiTypeKeys;
    const options = getApiOptions(walletPayCreateOrder, requestBody);
    const url = getApiUrl(walletPayCreateOrder);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
