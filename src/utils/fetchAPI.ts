import {apiErrors, baseReturnObject, IApiResponse, IApiReturnObject, IFetchCallback, FetchError} from 'src';
import {retryErrorCodeList, retryErrorCodeWaitTime} from 'src/variables';

const sleep = (time: number) => new Promise(func => setTimeout(func, time));
/**
 * # FetchAPI
 *
 * This function takes in a url and optional parameters, fetches data from the specified api and returns the data
 *
 * @param url URL to fetch data from
 * @param numOfRetries
 * @param options RequestInit parameters to be supplied to fetch
 */
export async function callFetch(url: RequestInfo, numOfRetries: number, totalNumberOfRetries: number, options: RequestInit = {}): Promise<IApiReturnObject> {
    const returnObject = {...baseReturnObject};

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            returnObject.response = await response.json();
            returnObject.success = true;
            returnObject.status = response.status;
            return returnObject;
        }
        else if (numOfRetries > 0 && retryErrorCodeList.find(code => code === response.status)) {
            const index = totalNumberOfRetries - numOfRetries;
            await sleep(retryErrorCodeWaitTime[index]);
            return callFetch(url, numOfRetries - 1, totalNumberOfRetries, options);
        }
        else {
            const message = 'Unable to process request';
            const body = await getResponseBody(response);
            returnObject.error = new FetchError(response.status, message, response.statusText, body);
            returnObject.success = false;
            returnObject.status = response.status;
            returnObject.response = typeof returnObject.error.body !== 'string' ? returnObject.error.body as IApiResponse : null;
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

    return callFetch(url, numOfRetries, numOfRetries ,options)
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
