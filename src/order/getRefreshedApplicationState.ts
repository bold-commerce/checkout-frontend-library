import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # getRefreshedApplicationState
 *
 * Get a refreshed copy of the application state
 *
 */
export async function getRefreshedApplicationState(): Promise<IApiReturnObject> {
    const {getApplicationState} = apiTypeKeys;
    const url = getApiUrl(getApplicationState);
    const options = getApiOptions(getApplicationState);
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.getApplicationState;
    return checkApiResponse(fetchRes, keysToTest);
}
