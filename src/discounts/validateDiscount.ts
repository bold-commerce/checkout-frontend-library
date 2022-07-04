import {apiTypeKeys, fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject} from 'src';

/**
 * # ValidateDiscount
 *
 * Validate a discount without adding to the order
 *
 * @param code discount code to validate
 * @param numOfRetries
 */
export async function validateDiscount(code: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {validateDiscount} = apiTypeKeys;
    const url = getApiUrlWithParams(validateDiscount, { discount_code: code });
    const options = getApiOptions(validateDiscount);
    return await fetchAPI(url, options, numOfRetries);
}
