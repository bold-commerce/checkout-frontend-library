import {auth} from 'src/variables';

/**
 * ## getJwtToken
 * This function get the Crsf token
 * required to call Checkout APIs.
 */
export function getCsrfToken(): string {
    return auth.csrfToken;
}
