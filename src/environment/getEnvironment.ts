import {environment} from '../variables';

/**
 * ## getEnvironment
 * This function get the basic environment variables
 * defined to call Checkout APIs.
 */
export function getEnvironment(): Environment {
    return {...environment};
}
