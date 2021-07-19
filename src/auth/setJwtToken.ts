import {auth} from 'src/variables';

/**
 * ## setJwtToken
 * This function set the Jwt token
 * required to start Checkout Session through APIs.
 *
 * @param token Provide the valid jwt token.
 */
export function setJwtToken(token: string): void {
    auth.jwtToken = token;
}

