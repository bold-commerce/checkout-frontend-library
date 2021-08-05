import {initialize, IApiReturnObject, IFetchError, FetchError} from 'src';
import fetchMock from 'fetch-mock-jest';
import {initializeOrderResponseMock} from 'src/variables/mocks';
import {environmentUrls, environmentTypes, apiErrors, baseReturnObject} from 'src/variables';
import * as checkApiResponse from 'src/utils/apiResponse';
import * as sessionStart from 'src/initialize/sessionStart';

describe('testing initialize function', () => {
    const url = `${environmentUrls.staging}/checkout/storefront/shopIdentifier/publicOrderId/session/start`;
    const initData = initializeOrderResponseMock;    
    const defaultReturn = {...baseReturnObject};
    defaultReturn.success = true;
    const timesCalled = 1;
    const sessionStartReturn = {...defaultReturn};
    sessionStartReturn.response = { data: { csrf_token: 'test_csrf' }};
    let checkApiResponseSpy: jest.SpyInstance;
    let sessionStartSpy: jest.SpyInstance;

    beforeAll(() => {
        fetchMock
            .get(url, {})
            .post(url, {});
    });

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
        checkApiResponseSpy = jest.spyOn(checkApiResponse, 'checkApiResponse').mockReturnValue(defaultReturn);
        sessionStartSpy = jest.spyOn(sessionStart, 'sessionStart').mockReturnValue(Promise.resolve(sessionStartReturn));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('successful initialize', async () => {
        const response = await initialize(initData, 'jwt', 'publicOrderId', 'shopIdentifier', { type: environmentTypes.staging });
    
        expect((response as IApiReturnObject).success).toBe(true); 
        expect((response as IApiReturnObject).error).toBeNull(); 
        expect((response as IApiReturnObject).response).toEqual(sessionStartReturn.response); 
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(timesCalled);
        expect(sessionStartSpy).toHaveBeenCalledTimes(timesCalled);
    });

    test('failed initalize: key not found in object', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(apiErrors.general.status, apiErrors.general.message);
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);

        const response = await initialize(initData, 'jwt', 'publicOrderId', 'shopIdentifier', { type: environmentTypes.staging });

        const errorContent = (response as IApiReturnObject).error as IFetchError;

        expect((response as IApiReturnObject).success).toBe(false); 
        expect(errorContent.status).toEqual(tempReturnObject.error.status); 
        expect(errorContent.message).toEqual(tempReturnObject.error.message); 
        expect((response as IApiReturnObject).response).toBeNull(); 
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(timesCalled);
        expect(sessionStartSpy).not.toHaveBeenCalled();
    });
});
