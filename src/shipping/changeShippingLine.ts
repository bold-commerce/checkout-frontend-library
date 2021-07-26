import {fetchAPI, getApiOptions, getApiUrl, IApiReturnObject, checkApiResponse} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # changeShippingLine
 * 
 * calls post shipping lines endpoint and sets the values for a shipping line
 * 
 * @param index id of the appropriate available shipping line
 */
export async function changeShippingLine(index: string): Promise<IApiReturnObject> {
    const {changeShippingLines} = apiTypeKeys;    
    const url = getApiUrl(changeShippingLines);
    const options = getApiOptions(changeShippingLines, { index });
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.changeShippingLines;

    return checkApiResponse(fetchRes, keysToTest); 
}