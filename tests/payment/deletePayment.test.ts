import {apiTypeKeys, baseReturnObject, keysToTestFromResponse, methods, deletePayment, FetchError} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import * as apiResponse from 'src/utils/apiResponse';
import {applicationStateMock, paymentMock} from 'src/variables/mocks';

describe('testing deletePayment', () => {
    const returnObject = {...baseReturnObject};
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/payments';
    const keysToTest = [keysToTestFromResponse.data, keysToTestFromResponse.applicationState];
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        returnObject.response = { data: { payment: paymentMock , application_state: applicationStateMock }};
        returnObject.success = true;
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('successful call (200)', async () => {
        const res = await deletePayment(paymentMock);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.deletePayment, paymentMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.deletePayment);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(returnObject, keysToTest);
        expect(res).toStrictEqual(returnObject);
    });

    test('failed call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValueOnce(tempReturnObject);

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await deletePayment(paymentMock, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.deletePayment, paymentMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.deletePayment);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(tempReturnObject, keysToTest);
        expect(res).toStrictEqual(tempReturnObject);
    });
});
