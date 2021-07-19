import {fetchAPI, getApiUrl, getApiOptions, getJwtToken, setCsrfToken, IApiReturnObject, FetchError} from 'src';

/** sessionStart
 *
 * Calls sessionStart API and starts a checkout session using environment variables that have been saved
 */
export async function sessionStart(): Promise<IApiReturnObject> {
    const type = 'sessionStart';
    const options = getApiOptions(type, {'token': getJwtToken()});
    const url = getApiUrl(type);
    const fetchRes = await fetchAPI(url, options);

    const { success, response } = fetchRes;

    if(success) {
        const { data: { csrf_token = '' } = {} } = response ?? {};
        if(csrf_token) {
            setCsrfToken(csrf_token);
        } else {
            fetchRes.success = false;
            const msg = 'CSRF Token not found';
            fetchRes.error = new FetchError(999, msg);
        }
    }
    return fetchRes;
}
