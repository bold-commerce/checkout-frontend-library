import { baseReturnObject, addLineItem, FetchError } from 'src';
import { fetchAPI, checkApiResponse } from 'src/utils';
import { mocked } from 'jest-mock';

jest.mock('src/utils', () => ({
    ...jest.requireActual('src/utils'),
    fetchAPI: jest.fn(),
    checkApiResponse: jest.fn(),
}));

const fetchAPIMock = mocked(fetchAPI);
const checkApiResponseMock = mocked(checkApiResponse);

describe('testing addLineItem', () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('successful call (200)', async () => {
        const returnObject = { ...baseReturnObject, success: true };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({ platform_id: 'platformId', sku: 'sku', quantity: 1, line_item_key: 'lineItemKey' });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                platform_id: 'platformId',
                sku: 'sku',
                quantity: 1,
                line_item_key: 'lineItemKey',
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });

    test('successful call (200) with platform_id', async () => {
        const returnObject = { ...baseReturnObject, success: true };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({
            platform_id: 'platformId', quantity: 1,
            line_item_key: 'lineItemKey'
        });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                platform_id: 'platformId',
                quantity: 1,
                line_item_key: 'lineItemKey'
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });

    test('successful call (200) with sku', async () => {
        const returnObject = { ...baseReturnObject, success: true };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({
            sku: 'sku', quantity: 1,
            line_item_key: 'lineItemKey'
        });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                sku: 'sku',
                quantity: 1,
                line_item_key: 'lineItemKey'
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });

    test('failed call (422) missing sku and platform_id', async () => {
        const tempReturnObject = { ...baseReturnObject };
        tempReturnObject.error = new FetchError(422, 'The sku field is required when platform id is not present. The platform id field is required when sku is not present.');
        const returnObject = { ...tempReturnObject, success: false };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({
            platform_id: '', sku: '', quantity: 1,
            line_item_key: 'lineItemKey'
        });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                platform_id: '',
                sku: '',
                quantity: 1,
                line_item_key: 'lineItemKey'
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });

    test('failed call (422) line_item_key', async () => {
        const tempReturnObject = { ...baseReturnObject };
        tempReturnObject.error = new FetchError(422, 'The line item key field is required.');
        const returnObject = { ...tempReturnObject, success: false };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({
            platform_id: 'platformId', sku: 'sku', quantity: 1,
            line_item_key: ''
        });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                platform_id: 'platformId',
                sku: 'sku',
                quantity: 1,
                line_item_key: ''
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });

    test('failed call (422) quantity', async () => {
        const tempReturnObject = { ...baseReturnObject };
        tempReturnObject.error = new FetchError(422, 'The quantity of an item must be at least 1');
        const returnObject = { ...tempReturnObject, success: false };
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await addLineItem({
            platform_id: 'platformId', sku: 'sku', quantity: 0,
            line_item_key: 'lineItemKey'
        });

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                platform_id: 'platformId',
                sku: 'sku',
                quantity: 0,
                line_item_key: 'lineItemKey'
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });
});
