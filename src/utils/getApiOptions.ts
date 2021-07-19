import {IApiTypes, getCsrfToken} from 'src';
import {apiTypes, methods} from 'src/variables';

/** getApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call
 *
 * @param type type of api that needs to be constructed
 * @param body object for body of request
 */
export function getApiOptions(type: keyof IApiTypes, body: Record<string, unknown> = {}): RequestInit {
    const { method, useCsrf } = apiTypes[type] ?? {method: methods.GET}; 
    const headers = new Headers();
    if(useCsrf) {
        headers.append('X-CSRF-TOKEN', getCsrfToken());
    }
    return { method, headers, body: JSON.stringify(body) };
}
