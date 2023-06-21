import {
    apiTypeKeys,
    baseReturnObject,
    keysToTestFromResponse,
    methods,
    batchRequest, IBatchableRequest
} from 'src';
import * as fetchAPI from 'src/utils/fetchAPI';
import * as getApiOptions from 'src/utils/getApiOptions';
import * as getApiBatchOptions from 'src/utils/getSubrequestApiOptions';
import * as apiUrl from 'src/utils/apiUrl';
import * as apiResponse from 'src/utils/apiResponse';
import {applicationStateMock, customerMock} from 'src/variables/mocks';

describe('testing batchRequest', () => {
    const returnObject = {...baseReturnObject};
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'john.doe@example.com';
    const acceptsMarketing = true;
    const subrequests = {'sub-requests': [
        {
            method: methods.GET,
            endpoint: 'https://api.boldcommerce.com/checkout/storefront///validate_email_address',
            payload: JSON.stringify({email})
        },
        {
            method: methods.POST,
            endpoint: 'https://api.boldcommerce.com/checkout/storefront///customer/guest',
            payload: JSON.stringify({firstName, lastName, email, acceptsMarketing})
        }
    ]};
    const keysToTest = [keysToTestFromResponse.data, keysToTestFromResponse.applicationState];
    let optionsMock: RequestInit;
    let getApiOptionsSpy: jest.SpyInstance;
    let getApiBulk: jest.SpyInstance;
    let getApiUrlSpy: jest.SpyInstance;
    let fetchApiSpy: jest.SpyInstance;
    let checkApiResponseSpy: jest.SpyInstance;

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({append: jest.fn()});
        returnObject.response = { data: { customer: customerMock, application_state: applicationStateMock }};
        returnObject.success = true;
        optionsMock = {method: methods.POST, credentials: 'include', headers: new Headers(), body: JSON.stringify(subrequests), mode: 'cors'};
        getApiOptionsSpy = jest.spyOn(getApiOptions, 'getApiOptions');
        getApiUrlSpy = jest.spyOn(apiUrl, 'getApiUrl');
        getApiBulk = jest.spyOn(getApiBatchOptions, 'getSubrequestApiOptions');
        fetchApiSpy = jest.spyOn(fetchAPI, 'fetchAPI').mockReturnValue(Promise.resolve(returnObject));
        checkApiResponseSpy = jest.spyOn(apiResponse, 'checkApiResponse').mockReturnValue(returnObject);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    const batchGuestCustomer : IBatchableRequest = {
        apiType: apiTypeKeys.addGuestCustomer,
        payload: {firstName, lastName, email, acceptsMarketing}
    };

    const batchValidateEmail : IBatchableRequest = {
        apiType: apiTypeKeys.validateEmail,
        payload: {email: email}
    };

    test('successful call (200) with 2 requests', async () => {

        const res = await batchRequest([batchValidateEmail, batchGuestCustomer]);

        expect(getApiOptionsSpy).toHaveBeenCalledTimes(1);
        expect(fetchApiSpy).toHaveBeenCalledTimes(1);
        expect(getApiBulk).toHaveBeenCalledTimes(2);
        expect(checkApiResponseSpy).toHaveBeenCalledTimes(1);
        expect(getApiOptionsSpy).toHaveBeenCalledWith(apiTypeKeys.batchRequest, subrequests);
        expect(getApiUrlSpy).toHaveBeenCalledWith(apiTypeKeys.batchRequest);
        expect(fetchApiSpy).toHaveBeenCalledWith('https://api.boldcommerce.com/checkout/storefront///batch', optionsMock, 0);
        expect(checkApiResponseSpy).toHaveBeenCalledWith(returnObject, keysToTest);
        expect(res).toStrictEqual(returnObject);
    });

});
