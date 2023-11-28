import {
    apiTypeKeys,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    IWalletPayOnApproveRequest,
    keysToTestFromResponse,
} from 'src';

/** walletPayOnApprove
 *
 * handles the on approve change event for wallet pay
 *
 * @param {@link IWalletPayOnApproveRequest} requestBody - on approve data from the wallet payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function walletPayOnApprove(requestBody: IWalletPayOnApproveRequest, numOfRetries= 0): Promise<IApiReturnObject> {
    const {walletPayOnApprove} = apiTypeKeys;
    const options = getApiOptions(walletPayOnApprove, requestBody);
    const url = getApiUrl(walletPayOnApprove);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState]);
}
