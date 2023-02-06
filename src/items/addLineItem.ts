import {apiTypeKeys, apiTypes, IApiReturnObject, ILineItemRequestWithPlatformId, ILineItemRequestWithSku, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';

/**
 * Add line item
 *
 * @param requestBody Request body to add the line item
 * @param requestBody.platform_id Id of the product on the platform. The platform id field is required when sku is not present.
 * @param requestBody.sku This line item's stock keeping unit. The sku field is required when platform id is not present.
 * @param requestBody.quantity The quantity of the line item
 * @param requestBody.line_item_key The unique key of the line item used by Checkout
 */
export async function addLineItem(requestBody: ILineItemRequestWithPlatformId | ILineItemRequestWithSku, numOfRetries = 0): Promise<IApiReturnObject> {
    const { addLineItem } = apiTypeKeys;
    const { keysToTest } = apiTypes.addLineItem;
    const url = getApiUrl(addLineItem);

    const options = getApiOptions(addLineItem, requestBody);
    const fetchRes = await fetchAPI(url, options, numOfRetries);

    return checkApiResponse(fetchRes, keysToTest);
}