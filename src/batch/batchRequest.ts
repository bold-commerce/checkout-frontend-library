import {
    apiTypeKeys,
    apiTypes,
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getSubrequestApiOptions,
    getApiUrl,
    IApiReturnObject, IBatchableRequest, IBatchSubrequest
} from 'src';

/**
 * # batchRequest
 *
 * execute an array of api requests in the same request
 * accepts an array of IBatchRequests
 * IBatchableRequest {
 *     apiType: keyof IApiTypes,
 *     payload: IGetApiOptionsBody,
 * }
 *
 * @param requests array of batch requests
 * @param numOfRetries
 */
export async function batchRequest( requests: Array<IBatchableRequest>, numOfRetries = 0): Promise<IApiReturnObject> {
    const {batchRequest} = apiTypeKeys;
    const url = getApiUrl(batchRequest);
    const subRequests: Array<IBatchSubrequest> = [];
    requests.forEach(batchRequest => {
        subRequests.push(getSubrequestApiOptions(batchRequest.apiType, batchRequest.payload));
    });
    const options = getApiOptions(batchRequest, { 'sub_requests' : subRequests });
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.batchRequest;
    if (fetchRes.status === 500) {
        return fetchRes;
    }
    return checkApiResponse(fetchRes, keysToTest, true);
}
