import {
    apiTypeKeys,
    apiTypes,
    IApiReturnObject,
    IPatchOrderMetaDataRequest,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    checkApiResponse
} from 'src';

/**
 * # patchOrderMetaData
 *
 * patches meta data for the order
 *
 * @param {@link IPatchOrderMetaData} requestBody - Patch Order Meta Data Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export async function patchOrderMetaData(requestBody: IPatchOrderMetaDataRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {patchOrderMetaData} = apiTypeKeys;
    const url = getApiUrl(patchOrderMetaData);
    const options = getApiOptions(patchOrderMetaData, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.patchOrderMetaData;
    return checkApiResponse(fetchRes, keysToTest);
}
