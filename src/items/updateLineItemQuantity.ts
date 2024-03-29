import {apiTypeKeys, apiTypes, IApiReturnObject, checkApiResponse, fetchAPI, getApiOptions, getApiUrl} from 'src';

/**
 * Update line item quantity
 *
 * @param lineItemKey The unique key of the line item to update
 * @param quantity The new quantity of the line item
 * @param numOfRetries
 */
export const updateLineItemQuantity = async (lineItemKey: string, quantity: number, numOfRetries = 0): Promise<IApiReturnObject> => {
    const { updateItem } = apiTypeKeys;
    const { keysToTest } = apiTypes.updateItem;
    const url = getApiUrl(updateItem);
    const options = getApiOptions(updateItem, {
        line_item_key: lineItemKey,
        quantity,
    });
    const fetchRes = await fetchAPI(url, options, numOfRetries);

    return checkApiResponse(fetchRes, keysToTest);
};
