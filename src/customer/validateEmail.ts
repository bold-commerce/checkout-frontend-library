import {fetchAPI, getApiOptions, getApiUrlWithParams, IApiReturnObject, IApiTypes} from 'src';

/** 
 * # validateEmail
 * 
 * validates the format of a supplied string as a valid email
 * 
 * @param email email to be validated
 */
export async function validateEmail(email: string): Promise<IApiReturnObject> {
    const apiType: keyof IApiTypes = 'validateEmail';
    const url = getApiUrlWithParams(apiType, { email_address: email });
    const options = getApiOptions(apiType);

    return await fetchAPI(url, options);
}
