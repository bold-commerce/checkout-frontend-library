import {IApiReturnObject, fetchAPI, getApiOptions, getApiUrl} from 'src';
import {apiTypeKeys} from 'src/variables';


/**
 * # processOrder
 *
 * calls post process order endpoint and starts backend processing of the order
 *
 */
export async function processOrder(numOfRetries = 0): Promise<IApiReturnObject> {
    const {processOrder} = apiTypeKeys;
    const url = getApiUrl(processOrder);
    const options = getApiOptions(processOrder);
    return await fetchAPI(url, options, numOfRetries);
}
