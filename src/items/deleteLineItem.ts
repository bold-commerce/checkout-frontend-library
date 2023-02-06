import {apiTypeKeys, apiTypes, IApiReturnObject, ILineItemRequest, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';

/**
 * Delete line item
 *
 * @param requestBody Request body to add the line item
 * @param requestBody.platform_id Id of the product on the platform. 
 * @param requestBody.sku This line item's stock keeping unit.
 * @param requestBody.quantity The quantity of the line item
 * @param requestBody.line_item_key The unique key of the line item used by Checkout
 */
export async function deleteLineItem(requestBody: ILineItemRequest, numOfRetries = 0): Promise<IApiReturnObject> {
    const { deleteLineItem } = apiTypeKeys;
    const { keysToTest } = apiTypes.deleteLineItem;
    const url = getApiUrl(deleteLineItem);

    const options = getApiOptions(deleteLineItem, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);

    return checkApiResponse(fetchRes, keysToTest);
}