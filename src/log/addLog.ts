import {apiTypeKeys, apiTypes, IApiReturnObject, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';

/**
 * # addLog
 *
 * This make requests which contain messages that will be logged through the usual Checkout logging mechanisms.
 *
 * @param message Message to add to Logs - Maximum of 100 Characters
 * @param key Optional Key to add to NR counters
 * @param numOfRetries
 *
 */
export async function addLog(message: string, key?: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {addLog} = apiTypeKeys;
    const {keysToTest} = apiTypes.addLog;
    const url = getApiUrl(addLog);
    const options = getApiOptions(addLog, { message, key });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, keysToTest);
}
