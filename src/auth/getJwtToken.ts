import {auth} from 'src/variables';

/**
 * ## getJwtToken
 * This function get the Jwt token
 * required to start Checkout Session through APIs.
 */
export function getJwtToken(): string {
    return auth.jwtToken;
}
