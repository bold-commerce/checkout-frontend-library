import {IApiReturnObject, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # deleteDiscount
 *
 * deletes the chosen discount from the order
 *
 * @param code discount code to remove
 *
 */
export async function deleteDiscount(code: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {deleteDiscount} = apiTypeKeys;
    const {keysToTest} = apiTypes.deleteDiscount;
    const url = getApiUrl(deleteDiscount);
    const options = getApiOptions(deleteDiscount, { code });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, keysToTest);
}
