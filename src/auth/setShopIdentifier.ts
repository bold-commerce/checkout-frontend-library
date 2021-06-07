import {auth} from '../variables';

/**
 * ## setShopIdentifier
 * This function set the shop identifier
 * required to call Checkout APIs.
 *
 * @param shopIdentifier Provide the valid shop identifier.
 */
export function setShopIdentifier(shopIdentifier: string): void {
    auth.shopIdentifier = shopIdentifier;
}