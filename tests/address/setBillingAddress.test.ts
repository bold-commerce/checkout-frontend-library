import {setBillingAddress} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import {apiTypeKeys, baseReturnObject, methods} from 'src/variables';
import {applicationStateMock, billingAddressMock} from 'src/variables/mocks';
import * as apiResponse from 'src/utils/apiResponse';

describe('testing set billing address api', () => {
    const returnObject = {...baseReturnObject};
    const timesWhenCalled = 1;
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/addresses/billing';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
        returnObject.response = { data: { address: billingAddressMock, application_state: applicationStateMock }};
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling setBillingAddress', async () => {
        const res = await setBillingAddress(billingAddressMock);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setBillingAddress, billingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setBillingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 0);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling setBillingAddress w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};
        checkApiResponseSpy.mockReturnValueOnce(tempReturnObject);
        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await setBillingAddress(billingAddressMock, 1);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setBillingAddress, billingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setBillingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock, 1);
        expect(res).toStrictEqual(tempReturnObject);
    });
});

