import {apiTypeKeys, fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject} from 'src';

/**
 * # validateEmail
 *
 * validates the format of a supplied string as a valid email
 *
 * @param email email to be validated
 * @param numOfRetries email to be validated
 */
export async function validateEmail(email: string, numOfRetries = 0): Promise<IApiReturnObject> {
    const {validateEmail} = apiTypeKeys;
    const url = getApiUrlWithParams(validateEmail, { email_address: email });
    const options = getApiOptions(validateEmail);

    return await fetchAPI(url, options, numOfRetries);
}
