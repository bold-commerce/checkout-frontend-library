import {baseReturnObject, deleteLineItem} from 'src';
import {fetchAPI, checkApiResponse} from 'src/utils';
import {mocked} from 'jest-mock';

jest.mock('src/utils', () => ({
    ...jest.requireActual('src/utils'),
    fetchAPI: jest.fn(),
    checkApiResponse: jest.fn(),
}));

const fetchAPIMock = mocked(fetchAPI);
const checkApiResponseMock = mocked(checkApiResponse);

describe('testing deleteLineItem', () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('successful call (200)', async () => {
        const returnObject = {...baseReturnObject, success: true};
        fetchAPIMock.mockResolvedValue(returnObject);
        checkApiResponseMock.mockReturnValue(returnObject);

        const res = await deleteLineItem({line_item_key: 'lineItemKey', quantity: 1});

        expect(res).toBe(returnObject);
        expect(fetchAPIMock).toHaveBeenCalledTimes(1);
        expect(fetchAPIMock).toBeCalledWith(expect.stringMatching(/items$/), expect.objectContaining({
            method: 'DELETE',
            body: JSON.stringify({
                line_item_key: 'lineItemKey',
                quantity: 1
            })
        }), 0);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, ['data', 'application_state']);
    });
});
