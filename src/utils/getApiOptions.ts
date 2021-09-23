import {IApiTypes, IGetApiOptionsBody, getJwtToken} from 'src';
import {apiTypes, methods} from 'src/variables';

/** getApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
export function getApiOptions(type: keyof IApiTypes, b: IGetApiOptionsBody = {}): RequestInit {
    const { method, useJwt } = apiTypes[type] ?? {method: methods.GET};
    const mode: RequestMode = 'cors';
    const credentials: RequestCredentials = 'include';
    const body: BodyInit | null = b && Object.keys(b).length === 0 ? null : JSON.stringify(b);
    const headers: HeadersInit = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if(useJwt) {
        headers.append('Authorization', `Bearer ${getJwtToken()}`);
    }
    return { method, mode, credentials, headers, body };
}
