import {apiTypeKeys, apiTypes, fetchAPI, getApiOptions, getApiUrl, IApiReturnObject, checkApiResponse} from 'src';

/**
 * # changeShippingLine
 *
 * calls post shipping lines endpoint and sets the values for a shipping line
 *
 * @param index id of the appropriate available shipping line
 * @param numOfRetries
 */
export async function changeShippingLine(index: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {changeShippingLines} = apiTypeKeys;
    const url = getApiUrl(changeShippingLines);
    const options = getApiOptions(changeShippingLines, { index });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.changeShippingLines;

    return checkApiResponse(fetchRes, keysToTest);
}
