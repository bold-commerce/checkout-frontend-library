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
export async function preProcessOrder(numOfRetries = 0): Promise<IApiReturnObject> {
    const {preProcessOrder} = apiTypeKeys;
    const url = getApiUrl(preProcessOrder);
    const options = getApiOptions(preProcessOrder);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    //Every status but SCA action needed
    if(fetchRes.status !== httpStatusCode.ACCEPTED) {
        const {keysToTest} = apiTypes.preProcessOrder;
        return checkApiResponse(fetchRes, keysToTest);
    } else{
        return fetchRes;
    }
}
