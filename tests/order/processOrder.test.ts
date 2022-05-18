import {processOrder, FetchError, getApiOptions, fetchAPI, getApiUrl, checkApiResponse} from 'src';
import {apiTypeKeys, apiTypes, baseReturnObject, httpStatusCode, methods} from 'src/variables';
import {applicationStateMock} from 'src/variables/mocks';
import {mocked} from 'jest-mock';

jest.mock('src/utils/apiUrl');
jest.mock('src/utils/getApiOptions');
jest.mock('src/utils/fetchAPI');
jest.mock('src/utils/apiResponse');
const getApitOptionsMock = mocked(getApiOptions, true);
const getApiUrlMock = mocked(getApiUrl, true);
const fetchApiMock = mocked(fetchAPI, true);
const checkApiResponseMock = mocked(checkApiResponse, true);

describe('testing set processOrder api', () => {
    const returnObject = {...baseReturnObject};
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/process_order';
    let optionsMock: RequestInit;
    const {keysToTest} = apiTypes.processOrder;

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
        checkApiResponseMock.mockReturnValue(returnObject);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('calling processOrder', async () => {
        const res = await processOrder();

        expect(getApitOptionsMock).toHaveBeenCalledTimes(1);
        expect(getApiUrlMock).toHaveBeenCalledTimes(1);
        expect(fetchApiMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(getApitOptionsMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(getApiUrlMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(fetchApiMock).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(checkApiResponseMock).toHaveBeenCalledWith(returnObject, keysToTest);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling processOrder 202 response', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.status = httpStatusCode.ACCEPTED;
        fetchApiMock.mockReturnValueOnce(Promise.resolve(tempReturnObject));
        const res = await processOrder();

        expect(getApitOptionsMock).toHaveBeenCalledTimes(1);
        expect(getApiUrlMock).toHaveBeenCalledTimes(1);
        expect(fetchApiMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).not.toHaveBeenCalled();
        expect(getApitOptionsMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(getApiUrlMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(fetchApiMock).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('failed processOrder call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');
        checkApiResponseMock.mockReturnValueOnce(tempReturnObject);

        fetchApiMock.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await processOrder(1);

        expect(getApitOptionsMock).toHaveBeenCalledTimes(1);
        expect(getApiUrlMock).toHaveBeenCalledTimes(1);
        expect(fetchApiMock).toHaveBeenCalledTimes(1);
        expect(checkApiResponseMock).toHaveBeenCalledTimes(1);
        expect(getApitOptionsMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(getApiUrlMock).toHaveBeenCalledWith(apiTypeKeys.processOrder);
        expect(fetchApiMock).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(checkApiResponseMock).toHaveBeenCalledWith(tempReturnObject, keysToTest);
        expect(res).toStrictEqual(tempReturnObject);
    });

});
