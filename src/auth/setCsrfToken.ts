import {auth} from '../variables';

/**
 * ## setCsrfToken
 * This function set the Csrf token
 * required to call Checkout APIs.
 *
 * @param token Provide the valid Csrf token.
 */
export function setCsrfToken(token: string): void {
    auth.csrfToken = token;
}
