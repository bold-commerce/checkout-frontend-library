import {auth} from 'src/variables';

/**
 * ## getShopIdentifier
 * This function get the shop identifier
 * required to call Checkout APIs.
 */
export function getShopIdentifier(): string {
    return auth.shopIdentifier;
}