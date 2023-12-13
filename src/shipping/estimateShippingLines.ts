import {
    apiTypeKeys,
    apiTypes,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject,
    checkApiResponse,
    IEstimateShippingLinesRequest
} from 'src';

/**
 *
 * Retrieve the estimated shipping lines
 *
 */
export async function estimateShippingLines(requestBody: IEstimateShippingLinesRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {estimateShippingLines} = apiTypeKeys;
    const url = getApiUrl(estimateShippingLines);
    const options = getApiOptions(estimateShippingLines, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.estimateShippingLines;
    return checkApiResponse(fetchRes, keysToTest);
}
