import {fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject} from 'src';
import {apiTypeKeys} from 'src/variables';

/**
 * # validateEmail
 *
 * validates the format of a supplied string as a valid email
 *
 * @param email email to be validated
 */
export async function validateEmail(email: string): Promise<IApiReturnObject> {
    const {validateEmail} = apiTypeKeys;
    const url = getApiUrlWithParams(validateEmail, { email_address: email });
    const options = getApiOptions(validateEmail);

    return await fetchAPI(url, options);
}
