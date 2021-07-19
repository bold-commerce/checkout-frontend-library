import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetBillingAddressRequest,
    ISetBillingAddressResponse,
    FetchError,
    IApiResponse
} from 'src';
import {apiTypeKeys} from 'src/variables';
import {setApplicationState} from 'src/state';

/** setBillingAddress
 *
 * Call API to set the Billing address to the order
 */
export async function setBillingAddress(requestBody: ISetBillingAddressRequest): Promise<IApiReturnObject> {
    const {setBillingAddress} = apiTypeKeys;
    const options = getApiOptions(setBillingAddress, requestBody);
    const url = getApiUrl(setBillingAddress);
    const fetchRes = await fetchAPI(url, options);
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;

    if(success) {
        if (response && 'data' in response) {
            const data = response.data as ISetBillingAddressResponse ?? {};
            const applicationState = data.application_state;
            if (applicationState) {
                setApplicationState(applicationState);
            } else {
                const msg = 'Application state not found in response';
                fetchRes.error = new FetchError(999, msg);
            }
        } else {
            fetchRes.success = false;
            const msg = 'Data not found in response';
            fetchRes.error = new FetchError(999, msg);
        }
    }
    return fetchRes;
}
