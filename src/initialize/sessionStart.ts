import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    getJwtToken,
    setCsrfToken,
    IApiReturnObject,
    FetchError,
    IApiResponse,
    ISessionStartApiResponse
} from 'src';
import {apiTypeKeys, apiErrors} from 'src/variables';

/** sessionStart
 *
 * Calls sessionStart API and starts a checkout session using environment variables that have been saved
 */
export async function sessionStart(): Promise<IApiReturnObject> {
    const {sessionStart} = apiTypeKeys;
    const options = getApiOptions(sessionStart, {token: getJwtToken()});
    const url = getApiUrl(sessionStart);
    const fetchRes = await fetchAPI(url, options);
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;

    if(success) {
        const { status, message } = apiErrors.noCsrf;
        if (response && 'data' in response) {
            const data = response.data as ISessionStartApiResponse ?? {};
            const csrf_token = data.csrf_token;
            if(csrf_token) {
                setCsrfToken(csrf_token);
            } else {
                fetchRes.success = false;
                fetchRes.error = new FetchError(status, message);
            }
        } else {
            fetchRes.success = false;
            fetchRes.error = new FetchError(status, message);
        }
    }
    return fetchRes;
}
