import { updateLineItemQuantity } from 'src';
import { fetchAPI, checkApiResponse } from 'src/utils';
import { baseReturnObject } from 'src/variables';
import { mocked } from 'ts-jest/utils';

jest.mock('src/utils', () => ({
    ...jest.requireActual('src/utils'),
    fetchAPI: jest.fn(),
    checkApiResponse: jest.fn(),
}));

const fetchAPIMock = mocked(fetchAPI);
const checkApiResponseMock = mocked(checkApiResponse);

describe('testing updateLineItemQuantity', () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('successful call (200)', async () => {
        const returnObject = {...baseReturnObject, success: true};
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await updateLineItemQuantity('lineItemKey', 42);

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'PUT',
            body: JSON.stringify({
                line_item_key: 'lineItemKey',
                quantity: 42,
            }),
        }));
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });
});
