import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # addGuestCustomer
 *
 * Add a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 */
export async function addGuestCustomer(firstName: string, lastName: string, email: string, acceptsMarketing = false, numOfRetries = 0): Promise<IApiReturnObject> {
    const {addGuestCustomer} = apiTypeKeys;
    const url = getApiUrl(addGuestCustomer);
    const options = getApiOptions(addGuestCustomer, {first_name: firstName, last_name: lastName, email_address: email, accepts_marketing: acceptsMarketing});
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    const {keysToTest} = apiTypes.addGuestCustomer;
    return checkApiResponse(fetchRes, keysToTest);
}
