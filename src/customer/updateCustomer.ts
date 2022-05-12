import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # updateCustomer
 *
 * update a customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 */
export async function updateCustomer(firstName: string, lastName: string, email: string, acceptsMarketing: boolean, numOfRetries = 0): Promise<IApiReturnObject> {
    const {updateCustomer} = apiTypeKeys;
    const url = getApiUrl(updateCustomer);
    const options = getApiOptions(updateCustomer, {first_name: firstName, last_name: lastName, email_address: email, accepts_marketing: acceptsMarketing});
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.updateCustomer;
    return checkApiResponse(fetchRes, keysToTest);
}
