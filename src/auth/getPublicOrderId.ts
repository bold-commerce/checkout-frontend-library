import {auth} from 'src/variables';

/**
 * ## getPublicOrderId
 * 
 * This function get the Public Order Id 
 * required to call Checkout APIs
 */
export function getPublicOrderId(): string {
    return auth.publicOrderId;
}