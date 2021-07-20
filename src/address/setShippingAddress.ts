import {
    fetchAPI,
    getApiUrl,
    getApiOptions,
    IApiReturnObject,
    ISetShippingAddressRequest,
    ISetShippingAddressResponse,
    FetchError,
    IApiResponse
} from 'src';
import {apiErrors, apiTypeKeys} from 'src/variables';
import {setApplicationState} from 'src/state';

/** setShippingAddress
 *
 * Call API to set the Shipping address to the order
 */
export async function setShippingAddress(requestBody: ISetShippingAddressRequest): Promise<IApiReturnObject> {
    const {setShippingAddress} = apiTypeKeys;
    const options = getApiOptions(setShippingAddress, requestBody);
    const url = getApiUrl(setShippingAddress);
    const fetchRes = await fetchAPI(url, options);
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;

    if(success) {
        if (response && 'data' in response) {
            const data = response.data as ISetShippingAddressResponse ?? {};
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
