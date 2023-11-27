import {
    apiTypeKeys,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    IWalletPayOnShippingRequest,
    keysToTestFromResponse,
} from 'src';

/** walletPayOnShipping
 *
 * handles the on shipping change event for wallet pay
 *
 * @param {@link IWalletPayOnShippingRequest} requestBody - on shipping data from the wallet payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function walletPayOnShipping(requestBody: IWalletPayOnShippingRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {walletPayOnShipping} = apiTypeKeys;
    const options = getApiOptions(walletPayOnShipping, requestBody);
    const url = getApiUrl(walletPayOnShipping);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
