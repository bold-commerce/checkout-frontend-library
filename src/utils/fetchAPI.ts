import {IApiResponse, IApiReturnObject, IFetchCallback, FetchError} from 'src';
import {baseReturnObject, apiErrors} from 'src/variables';

/**
 * # FetchAPI
 *
 * This function takes in a url and optional parameters, fetches data from the specified api and returns the data
 *
 * @param url URL to fetch data from
 * @param optional Optional parameters that can be supplied to fetch
 */
export async function callFetch(url: RequestInfo, options: RequestInit = {}): Promise<FetchError | IApiResponse> {
    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            const message = 'Response status is invalid';
            return new FetchError(response.status, message, response.statusText, response.body);
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
            } else {
                returnObject.success = true;
                returnObject.response = res;
            }
            callback && callback(returnObject);
            return returnObject;
        });
}


