import {addGuestCustomer, FetchError, IApiReturnObject, IFetchError} from 'src';
import * as setApplicationState from 'src/state/setApplicationState';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import {apiErrors, apiTypeKeys, baseReturnObject, methods} from 'src/variables';
import {applicationStateMock, customerMock} from 'src/variables/mocks';

describe('testing addGuestCustomer', () => {
    const returnObject = {...baseReturnObject};
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@example.com';
    const requestMock = {first_name: firstName, last_name: lastName, email};
    const timesWhenCalled = 1;
    const timesWhenNotCalled = 0;
    const apiUrlMock = 'https://api.com/checkout/storefront/123/123/customer/guest';
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let setApplicationStateSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        optionsMock = {method: methods.POST, headers: new Headers(), body: JSON.stringify({})};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions').mockReturnValue(optionsMock);
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl').mockReturnValue(apiUrlMock);
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        setApplicationStateSpy = jest.spyOn(setApplicationState, 'setApplicationState');
        returnObject.response = { data: { customer: customerMock, application_state: applicationStateMock }};
        returnObject.success = true;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('successful call (200)', async () => {
        const res = await addGuestCustomer(firstName, lastName, email);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer, requestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(setApplicationStateSpy).toHaveBeenCalledWith(applicationStateMock);
        expect(res).toStrictEqual(returnObject);
    });

    test('failed call (422)', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(422, 'Unprocessable Entity');

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await addGuestCustomer(firstName, lastName, email);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer, requestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('Success call response with undefined data', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = { data: undefined };
        const { message } = apiErrors.noAppState;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await addGuestCustomer(firstName, lastName, email);
        const errorContent = <IFetchError>(<IApiReturnObject>res).error;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer, requestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(errorContent.message).toBe(message);
    });

    test('Success call response with undefined application state', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = { data: { customer: undefined, application_state: undefined }};
        const { message } = apiErrors.noAppState;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await addGuestCustomer(firstName, lastName, email);
        const errorContent = <IFetchError>(<IApiReturnObject>res).error;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer, requestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(errorContent.message).toBe(message);
    });

    test('Success call no response', async () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        tempReturnObject.response = null;
        const { message } = apiErrors.noResData;

        fetchApiSpy.mockReturnValueOnce(Promise.resolve(tempReturnObject));

        const res = await addGuestCustomer(firstName, lastName, email);
        const errorContent = <IFetchError>(<IApiReturnObject>res).error;

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(getApiUrlSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(fetchApiSpy).toHaveBeenCalledTimes(timesWhenCalled);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(timesWhenNotCalled);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer, requestMock);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.addGuestCustomer);
        expect(fetchApiSpy).toHaveBeenCalledWith(apiUrlMock, optionsMock);
        expect(res).toStrictEqual(tempReturnObject);
        expect(errorContent.message).toBe(message);
    });
});
