import {IApiTypes, IGetApiOptionsBody, getCsrfToken} from 'src';
import {apiTypes, methods} from 'src/variables';

/** getApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
export function getApiOptions(type: keyof IApiTypes, b: IGetApiOptionsBody = {}): RequestInit {
    const { method, useCsrf } = apiTypes[type] ?? {method: methods.GET};
    const body: BodyInit | null = b && Object.keys(b).length === 0 ? null : JSON.stringify(b);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(useCsrf) {
        headers.append('X-CSRF-TOKEN', getCsrfToken());
    }
    return { method, headers, body };
}
