import {IFetchError, IApiReturnObject, setShippingAddress} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import * as setApplicationState from 'src/state/setApplicationState';
import {apiTypeKeys, baseReturnObject, methods, apiErrors} from 'src/variables';
import {applicationStateMock, shippingAddressMock} from 'src/variables/mocks';

describe('testing set shipping address api', () => {
    const returnObject = {...baseReturnObject};
    const timesWhenCalled = 1;
    const timesWhenNotCalled = 0;
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/addresses/shipping';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let setApplicationStateSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        setApplicationStateSpy = jest.spyOn(setApplicationState, 'setApplicationState');
        returnObject.response = { data: { address: shippingAddressMock, application_state: applicationStateMock }};
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('calling setShippingAddress', async () => {
        const res = await setShippingAddress(shippingAddressMock);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress, shippingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(setApplicationStateSpy).toHaveBeenCalledWith(applicationStateMock);
        expect(res).toStrictEqual(returnObject);
    });

    test('calling setShippingAddress w/ success = false', async () => {
        const tempReturnObject = {...baseReturnObject};

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await setShippingAddress(shippingAddressMock);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress, shippingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('fetch successful but response with undefined data', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = { data: undefined };
        const { message } = apiErrors.noAppState;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await setShippingAddress(shippingAddressMock);
        const errorContent = (res as IApiReturnObject).error as IFetchError;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress, shippingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(errorContent.message).toBe(message);
    });

    test('fetch successful but response with undefined application state', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = { data: { address: undefined, application_state: undefined }};
        const { message } = apiErrors.noAppState;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await setShippingAddress(shippingAddressMock);
        const errorContent = (res as IApiReturnObject).error as IFetchError;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress, shippingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(errorContent.message).toBe(message);
    });

    test('fetch successful but no response', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = null;
        const { message } = apiErrors.noResData;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await setShippingAddress(shippingAddressMock);

        const errorContent = (res as IApiReturnObject).error as IFetchError;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress, shippingAddressMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.setShippingAddress);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(res.success).toBe(false);
        expect(errorContent.message).toBe(message);
    });
});

