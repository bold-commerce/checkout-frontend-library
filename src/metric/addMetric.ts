import {apiTypeKeys, apiTypes, IApiReturnObject, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';

/**
 * # addMetric
 *
 * This make requests which contain a metric that will be logged through the usual Checkout logging mechanisms.
 *
 * @param key Optional Key to add to NR counters
 * @param value A numeric metric to be logged
 * @param attributes stringify Json object to add to log context - Maximum of 700 Characters
 * @param numOfRetries
 *
 */
export async function addMetric(key: string, value: number, platform_id: string, attributes?: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {addMetric} = apiTypeKeys;
    const {keysToTest} = apiTypes.addMetric;
    const url = getApiUrl(addMetric);
    const options = getApiOptions(addMetric, { key, value, attributes });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, keysToTest);
}
