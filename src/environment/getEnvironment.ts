import {IEnvironment} from 'src';
import {environment} from 'src/variables';

/**
 * ## getEnvironment
 * This function get the basic environment variables
 * defined to call Checkout APIs.
 */
export function getEnvironment(): Required<IEnvironment> {
    return {...environment};
}
