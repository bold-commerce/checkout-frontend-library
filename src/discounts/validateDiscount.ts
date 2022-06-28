import {apiTypeKeys, apiTypes, checkApiResponse, fetchAPI, getApiOptions, getApiUrl, IApiReturnObject} from 'src';

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
    const options = getApiOptions(validateDiscount, { discount_code: code });
    const url = getApiUrl(validateDiscount);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.validateDiscount;
    return checkApiResponse(fetchRes, keysToTest);
}
