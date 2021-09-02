import {IApiResponse, IApiReturnObject, IFetchCallback, FetchError} from 'src';
import {baseReturnObject, apiErrors} from 'src/variables';

/**
 * # FetchAPI
 *
 * This function takes in a url and optional parameters, fetches data from the specified api and returns the data
 *
 * @param url URL to fetch data from
 * @param options RequestInit parameters to be supplied to fetch
 */
export async function callFetch(url: RequestInfo, options: RequestInit = {}): Promise<FetchError | IApiResponse> {
    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            const message = 'Unable to process request';
            const body = await getResponseBody(response);
            return new FetchError(response.status, message, response.statusText, body);
        }
        return await response.json();
    } catch(e) {
        const { status, message } = apiErrors.general;
        return new FetchError(status, `${message} - ${e}`);
    }
}

export function fetchAPI(url: string, options: RequestInit = {}, callback?: IFetchCallback): Promise<IApiReturnObject> {
    const returnObject = {...baseReturnObject};

    return callFetch(url, options)
        .then((res) => {
            if (res instanceof FetchError) {
                returnObject.error = res;
                returnObject.response = typeof res.body !== 'string' ? res.body as IApiResponse : null;
            } else {
                returnObject.success = true;
                returnObject.response = res;
            }
            callback && callback(returnObject);
            return returnObject;
        });
}

async function getResponseBody(response: Response): Promise<string | IApiResponse> {
    const contentType: string | null = response.headers.get('content-type');
    return (contentType && contentType.indexOf('application/json') !== -1)
        ? await response.json()
        : await response.text();
}
