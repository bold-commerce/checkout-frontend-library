import {
    apiTypeKeys,
    apiTypes,
    httpStatusCode,
    IApiReturnObject,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    checkApiResponse
} from 'src';

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
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    //Every status but SCA action needed
    if(fetchRes.status !== httpStatusCode.ACCEPTED) {
        const {keysToTest} = apiTypes.processOrder;
        return checkApiResponse(fetchRes, keysToTest);
    } else{
        return fetchRes;
    }
}
