import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # updateGuestCustomer
 *
 * update a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 */
export async function updateGuestCustomer(firstName: string, lastName: string, email: string): Promise<IApiReturnObject> {
    const {updateGuestCustomer} = apiTypeKeys;
    const url = getApiUrl(updateGuestCustomer);
    const options = getApiOptions(updateGuestCustomer, {first_name: firstName, last_name: lastName, email_address: email});
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.updateGuestCustomer;
    return checkApiResponse(fetchRes, keysToTest);
}
