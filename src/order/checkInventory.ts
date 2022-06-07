import {IApiReturnObject, fetchAPI, getApiOptions, checkApiResponse, getApiUrlWithParams, apiTypeKeys, apiTypes} from 'src';

/**
 * # checkInventory
 *
 * Call to check inventory of the items in the order
 *
 * @param {'initial' | 'final'} stage
 * @param {number} numOfRetries
 *
 * @returns {Promise<IApiReturnObject>}
 *
 */
export async function checkInventory(stage: 'initial'|'final', numOfRetries = 0): Promise<IApiReturnObject> {
    const {checkInventory} = apiTypeKeys;
    const url = getApiUrlWithParams(checkInventory, {stage});
    const options = getApiOptions(checkInventory);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.checkInventory;
    return checkApiResponse(fetchRes, keysToTest);
}
