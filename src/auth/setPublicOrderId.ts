import {auth} from 'src/variables';

/**
 * ## setPublicOrderId
 * 
 * This function sets the Public Order Id
 * required to call Checkout APIs
 * 
 * @param token Provide the Public Order Id
 */
export function setPublicOrderId(token: string): void {
    auth.publicOrderId = token;
}