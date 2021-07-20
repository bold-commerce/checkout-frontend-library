import {
    fetchAPI,
    FetchError,
    getApiOptions,
    getApiUrl,
    IApiResponse,
    IApiReturnObject,
    ISetBillingAddressResponse
} from 'src';
import {apiErrors, apiTypeKeys} from 'src/variables';
import {setApplicationState} from 'src/state';

/**
 * # addGuestCustomer
 *
 * Add a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 */
export async function addGuestCustomer(firstName: string, lastName: string, email: string): Promise<IApiReturnObject> {
    const {addGuestCustomer} = apiTypeKeys;
    const url = getApiUrl(addGuestCustomer);
    const options = getApiOptions(addGuestCustomer, {first_name: firstName, last_name: lastName, email});

    const fetchRes = await fetchAPI(url, options);
    // Todo: Implement call to checkApiResponse to replace below code when CE-87 done
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;

    if(success) {
        if (response && 'data' in response) {
            const data = response.data as ISetBillingAddressResponse ?? {};
            const applicationState = data.application_state;
            if (applicationState) {
                setApplicationState(applicationState);
            } else {
                const { status, message } = apiErrors.noAppState;
                fetchRes.error = new FetchError(status, message);
            }
        } else {
            fetchRes.success = false;
            const { status, message } = apiErrors.noResData;
            fetchRes.error = new FetchError(status, message);
        }
    }
    return fetchRes;
}
