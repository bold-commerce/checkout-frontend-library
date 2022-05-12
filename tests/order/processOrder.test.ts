import {processOrder, FetchError, getApiOptions, fetchAPI, getApiUrl} from 'src';
import {apiTypeKeys, baseReturnObject, methods} from 'src/variables';
import {applicationStateMock} from 'src/variables/mocks';
import {mocked} from 'jest-mock';

jest.mock('src/utils/apiUrl');
jest.mock('src/utils/getApiOptions');
jest.mock('src/utils/fetchAPI');
const getApitOptionsMock = mocked(getApiOptions, true);
const getApiUrlMock = mocked(getApiUrl, true);
const fetchApiMock = mocked(fetchAPI, true);

describe('testing set processOrder api', () => {
    const returnObject = {...baseReturnObject};
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/process_order';
    let optionsMock: RequestInit;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApitOptionsMock.mockReturnValue(optionsMock);
        getApiUrlMock.mockReturnValue(apiUrlMock);
        fetchApiMock.mockReturnValue(Promise.resolve(returnObject));
        returnObject.response = { application_state: applicationStateMock };
        returnObject.success = true;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('calling processOrder', async () => {
        const res = await processOrder();

        expect(getApitOptionsMock).toHaveBeenCalledTimes(1);
        expect(getApiUrlMock).toHaveBeenCalledTimes(1);
        expect(fetchApiMock).toHaveBeenCalledTimes(1);
        expect(getApitOptionsMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(getApiUrlMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(fetchApiMock).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(returnObject);
    });

    test('failed processOrder call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');

        fetchApiMock.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await processOrder();

        expect(getApitOptionsMock).toHaveBeenCalledTimes(1);
        expect(getApiUrlMock).toHaveBeenCalledTimes(1);
        expect(fetchApiMock).toHaveBeenCalledTimes(1);
        expect(getApitOptionsMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(getApiUrlMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(fetchApiMock).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
    });

});
