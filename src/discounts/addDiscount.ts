import {checkApiResponse, fetchAPI, getApiOptions, getApiUrl, IApiReturnObject} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/** 
 * # AddDiscount
 * 
 * Adds a discount to an order
 * 
 * @param code discount code to add
 */
export async function addDiscount(code: string): Promise<IApiReturnObject> {
    const {addDiscount} = apiTypeKeys;
    const options = getApiOptions(addDiscount, { code });
    const url = getApiUrl(addDiscount);
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.addDiscount;
    return checkApiResponse(fetchRes, keysToTest);
}
