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
export async function callFetch(url: RequestInfo, numOfRetries: number, options: RequestInit = {}): Promise<IApiReturnObject> {
    const returnObject = {...baseReturnObject};

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            returnObject.response = await response.json();
            returnObject.success = true;
            returnObject.status = response.status;
            return returnObject;
        }
        else if (numOfRetries > 0) {
            return callFetch(url, numOfRetries - 1, options);
        }
        else {
            const message = 'Unable to process request';
            const body = await getResponseBody(response);
            returnObject.error = new FetchError(response.status, message, response.statusText, body);
            returnObject.success = false;
            returnObject.status = response.status;
            return returnObject;
        }
    } catch(e) {
        const { status, message } = apiErrors.general;
        returnObject.error = new FetchError(status, `${message} - ${e}`);
        returnObject.success = false;
        return returnObject;
    }
}

export function fetchAPI(url: string, options: RequestInit = {}, numOfRetries = 0 , callback?: IFetchCallback): Promise<IApiReturnObject> {
    if(numOfRetries > 5){
        numOfRetries = 5;
    }

    return callFetch(url, numOfRetries ,options)
        .then((res) => {
            callback && callback(res);
            return res;
        });
}

async function getResponseBody(response: Response): Promise<string | IApiResponse> {
    const contentType: string | null = response.headers.get('content-type');
    return (contentType && contentType.indexOf('application/json') !== -1)
        ? await response.json()
        : await response.text();
}
