import {apiTypes, methods, IApiTypes, IGetApiOptionsBody, getApiUrl, IBatchSubrequest} from 'src';

/** getSubrequestApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call. doesnt add headers
 * or include credentials. meant to be used to construct batch subrequests and not in isolation
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
export function getSubrequestApiOptions(type: keyof IApiTypes, b: IGetApiOptionsBody = {}): IBatchSubrequest {
    const { method } = apiTypes[type] ?? {method: methods.GET};
    const endpoint = getApiUrl(type);
    const payload: BodyInit | null = b && Object.keys(b).length === 0 ? null : JSON.stringify(b);
    return { method, endpoint, payload };
}
