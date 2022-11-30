import {apiTypeKeys, baseReturnObject, methods, apiTypes, addDiscount} from 'src';
import {applicationStateMock, discountMock} from 'src/variables/mocks';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import * as apiResponse from 'src/utils/apiResponse';

describe('testing add discounts api', () => {
    const returnObject = {...baseReturnObject};
    const timesWhenCalled = 1;
    const code = 'test_code';
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/discounts';
    const {keysToTest} = apiTypes.addDiscount;
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
        returnObject.response = { data: { discount: discountMock, application_state: applicationStateMock }};
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling add discounts', async () => {
        const res = await addDiscount(code);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addDiscount, {code});
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addDiscount);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(returnObject, keysToTest);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling add discounts w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);

        const res = await addDiscount(code, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addDiscount, {code});
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addDiscount);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(tempReturnObject, keysToTest);
        expect(res).toStrictEqual(tempReturnObject);
    });

});
