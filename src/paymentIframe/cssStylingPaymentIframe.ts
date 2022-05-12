import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject, ICssStylingPaymentIframeRequest
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * cssStylingPaymentIframe
 *
 * Use this endpoint to style the Payment Isolation Gateway Interface (PIGI) using CSS and media queries.
 */
export async function cssStylingPaymentIframe(body: ICssStylingPaymentIframeRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const {cssStylingPaymentIframe} = apiTypeKeys;
    const options = getApiOptions(cssStylingPaymentIframe, body);
    const url = getApiUrl(cssStylingPaymentIframe);
    const fetchRes = await fetchAPI(url, options, numOfRetries);
    return checkApiResponse(fetchRes, apiTypes[cssStylingPaymentIframe].keysToTest);
}
