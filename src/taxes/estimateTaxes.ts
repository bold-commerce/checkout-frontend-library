import {
    apiTypeKeys,
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    checkApiResponse,
    apiTypes,
    IEstimateTaxRequest,
} from 'src';

/** estimateTaxes
 *
 * Get the estimated taxes on the order
 */
export async function estimateTaxes(requestBody: IEstimateTaxRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {estimateTaxes} = apiTypeKeys;
    const options = getApiOptions(estimateTaxes, requestBody);
    const url = getApiUrl(estimateTaxes);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.estimateTaxes;
    return checkApiResponse(fetchRes, keysToTest);
}
