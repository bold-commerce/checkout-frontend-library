import {applicationStateMock, shippingAddressMock, selectShippingLineArrayMock} from 'src/variables/mocks';
import {checkApiResponse} from 'src/utils/apiResponse';
import {FetchError} from 'src';
import * as getErrorFromFieldName from 'src/utils/getErrorFromFieldName';
import * as findKeyInObject from 'src/utils/findKeyInObject';
import * as setApplicationState from 'src/state/setApplicationState';
import {apiErrors} from 'src/variables';

describe('checkApiResponse', () => {
    const keyToTest: Array<string> = ['data', 'application_state'];

    let findKeyInObjectSpy: jest.SpyInstance;
    let setApplicationStateSpy: jest.SpyInstance;
    let getErrorFromFieldNameSpy: jest.SpyInstance;
    let fetchResponseProvider = initializeFetchResponseProvider();

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });

        findKeyInObjectSpy = jest.spyOn(findKeyInObject, 'findKeyInObject');
        setApplicationStateSpy = jest.spyOn(setApplicationState, 'setApplicationState');
        getErrorFromFieldNameSpy = jest.spyOn(getErrorFromFieldName, 'getErrorFromFieldName');
        fetchResponseProvider = initializeFetchResponseProvider();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Call with undefined keysToCheck', () => {
        const expected = new FetchError(apiErrors.emptyKeysToCheck.status, apiErrors.emptyKeysToCheck.message);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.emptyFetchResponse);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toStrictEqual(expected);
        expect(findKeyInObjectSpy).not.toHaveBeenCalled();
        expect(setApplicationStateSpy).not.toHaveBeenCalled();
        expect(getErrorFromFieldNameSpy).not.toHaveBeenCalled();
    });

    test('Call with empty keysToCheck', () => {
        const expected = new FetchError(apiErrors.emptyKeysToCheck.status, apiErrors.emptyKeysToCheck.message);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.emptyFetchResponse, []);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toStrictEqual(expected);
        expect(findKeyInObjectSpy).not.toHaveBeenCalled();
        expect(setApplicationStateSpy).not.toHaveBeenCalled();
        expect(getErrorFromFieldNameSpy).not.toHaveBeenCalled();
    });

    test('Call with success === false', () => {
        const expected = new FetchError(apiErrors.general.status, apiErrors.general.message);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.successFalseFetchResponse, keyToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toStrictEqual(expected);
        expect(findKeyInObjectSpy).not.toHaveBeenCalled();
        expect(setApplicationStateSpy).not.toHaveBeenCalled();
        expect(getErrorFromFieldNameSpy).not.toHaveBeenCalled();
    });

    test.each(fetchResponseProvider.populatedFetchResponse)('Call with Shipping Address / Shipping Lines populated data', (data) => {
        const resultCheckApiResponse = checkApiResponse(data, keyToTest);
        expect(resultCheckApiResponse.success).toBe(true);
        expect(resultCheckApiResponse.error).toBeNull();
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(2);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(1);
        expect(getErrorFromFieldNameSpy).not.toHaveBeenCalled();
        expect(setApplicationStateSpy).toHaveBeenCalledWith(applicationStateMock);
    });

    test('Call with no data', () => {
        const {errorsInResponse, noResData, noAppState} = apiErrors;
        getErrorFromFieldNameSpy = jest
            .spyOn(getErrorFromFieldName, 'getErrorFromFieldName')
            .mockReturnValueOnce(noResData)
            .mockReturnValueOnce(noAppState);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.emptyFetchResponse, keyToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: [noResData.message,noAppState.message]});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(2);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(2);
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(1, 'data', 'noField');
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(2, 'application_state', 'noField');

    });

    test('Call with undefined data', () => {
        const keyToTest: Array<string> = ['data'];
        const {errorsInResponse, emptyResData} = apiErrors;
        getErrorFromFieldNameSpy = jest
            .spyOn(getErrorFromFieldName, 'getErrorFromFieldName')
            .mockReturnValueOnce(emptyResData);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.undefinedDataFetchResponse, keyToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: [emptyResData.message]});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(1);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(1);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledWith('data');
    });

    test('Call with undefined data and non existing application_state', () => {
        const keyToTest: Array<string> = ['data', 'application_state'];
        const {errorsInResponse, emptyResData, noAppState} = apiErrors;
        getErrorFromFieldNameSpy = jest
            .spyOn(getErrorFromFieldName, 'getErrorFromFieldName')
            .mockReturnValueOnce(emptyResData)
            .mockReturnValueOnce(noAppState);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.undefinedDataFetchResponse, keyToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: [emptyResData.message,noAppState.message]});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(2);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(2);
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(1, 'data');
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(2, 'application_state', 'noField');
    });

    test('Call with undefined application state', () => {
        const {errorsInResponse, emptyAppState} = apiErrors;
        getErrorFromFieldNameSpy = jest
            .spyOn(getErrorFromFieldName, 'getErrorFromFieldName')
            .mockReturnValueOnce(emptyAppState);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.undefinedApplicationStateFetchResponse, keyToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: [emptyAppState.message]});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(2);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(1);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledWith('application_state');
    });

    test('Call with undefined new field name - other than `application_state` and `data`', () => {
        const {errorsInResponse, emptyFieldInResponse, noFieldInResponse} = apiErrors;
        const keysToTest: Array<string> = ['shipping_lines', 'dummyNode'];
        getErrorFromFieldNameSpy = jest
            .spyOn(getErrorFromFieldName, 'getErrorFromFieldName')
            .mockReturnValueOnce(emptyFieldInResponse)
            .mockReturnValueOnce(noFieldInResponse);

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.undefinedShippingLinesFetchResponse, keysToTest);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: [emptyFieldInResponse.message.replace('{{field}}', keysToTest[0]), noFieldInResponse.message.replace('{{field}}', keysToTest[1])]});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(2);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(2);
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(1, keysToTest[0]);
        expect(getErrorFromFieldNameSpy).toHaveBeenNthCalledWith(2, keysToTest[1], 'noField');
    });
});

function initializeFetchResponseProvider() {
    const errorSuccessFalse = new FetchError(apiErrors.general.status, apiErrors.general.message);
    return {
        emptyFetchResponse: {
            success: true,
            error: null,
            response: null,
        },
        undefinedDataFetchResponse: {
            success: true,
            error: null,
            response: {
                data: undefined,
            },
        },
        successFalseFetchResponse: {
            success: false,
            error: errorSuccessFalse,
            response: null,
        },
        undefinedApplicationStateFetchResponse: {
            success: true,
            error: null,
            response: {
                data: {
                    shipping_lines: selectShippingLineArrayMock,
                    application_state: undefined
                }
            },
        },
        undefinedShippingLinesFetchResponse: {
            success: true,
            error: null,
            response: {
                data: {
                    shipping_lines: undefined,
                    application_state: undefined
                }
            },
        },
        populatedFetchResponse: [
            {
                success: true,
                error: null,
                response: {
                    data: {
                        address: shippingAddressMock,
                        application_state: applicationStateMock
                    }
                }
            }, {
                success: true,
                error: null,
                response: {
                    data: {
                        shipping_lines: selectShippingLineArrayMock,
                        application_state: applicationStateMock
                    }
                }
            },
        ]
    };
}
