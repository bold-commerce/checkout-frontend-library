import {IApiReturnObject, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';


/**
 * # processOrder
 * 
 * calls post process order endpoint and starts backend processing of the order
 * 
 */
export async function processOrder(): Promise<IApiReturnObject> {
    const {processOrder} = apiTypeKeys;
    const url = getApiUrl(processOrder);
    const options = getApiOptions(processOrder);
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.processOrder;
    return checkApiResponse(fetchRes, keysToTest);
}
