import {
    apiTypeKeys,
    baseReturnObject,
    keysToTestFromResponse,
    methods,
    FetchError,
    deleteGiftCardPayment
} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import * as apiResponse from 'src/utils/apiResponse';
import {applicationStateMock, paymentMock} from 'src/variables/mocks';

describe('testing deleteGiftCardPayment', () => {
    const returnObject = {...baseReturnObject};
    const id = '1';
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/payments/gift_card';
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
        const res = await deleteGiftCardPayment(id);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment, { id });
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(returnObject, keysToTest);
        expect(res).toStrictEqual(returnObject);
    });

    test('failed call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValueOnce(tempReturnObject);

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await deleteGiftCardPayment(id, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment, { id });
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(tempReturnObject, keysToTest);
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('failed call (404)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(404, 'Giftcard payment not found');
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValueOnce(tempReturnObject);

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await deleteGiftCardPayment(id, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment, { id });
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.deleteGiftCardPayment);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(tempReturnObject, keysToTest);
        expect(res).toStrictEqual(tempReturnObject);
    });
});
