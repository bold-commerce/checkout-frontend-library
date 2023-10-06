import {
    applicationStateMock,
    shippingAddressMock,
    selectShippingLineArrayMock,
    orderInitialDataMock
} from 'src/variables/mocks';
import {checkApiResponse} from 'src/utils/apiResponse';
import {apiErrors, keysToTestFromResponse, FetchError} from 'src';
import * as getErrorFromFieldName from 'src/utils/getErrorFromFieldName';
import * as findKeyInObject from 'src/utils/findKeyInObject';
import * as setApplicationState from 'src/state/setApplicationState';
import * as setOrderInitialData from 'src/state/setOrderInitialData';

describe('checkApiResponse', () => {
    const keyToTest: Array<string> = [keysToTestFromResponse.data, keysToTestFromResponse.applicationState];

    let findKeyInObjectSpy: jest.SpyInstance;
    let setApplicationStateSpy: jest.SpyInstance;
    let setOrderInitialDataSpy: jest.SpyInstance;
    let getErrorFromFieldNameSpy: jest.SpyInstance;
    let fetchResponseProvider = initializeFetchResponseProvider();

    beforeEach(() => {
        global.Headers = jest.fn().mockReturnValue({
            append: jest.fn(() => null)
        });

        findKeyInObjectSpy = jest.spyOn(findKeyInObject, 'findKeyInObject');
        setApplicationStateSpy = jest.spyOn(setApplicationState, 'setApplicationState');
        setOrderInitialDataSpy = jest.spyOn(setOrderInitialData, 'setOrderInitialData');
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

    test('Call with success false, check on fail, no keys to check and error metadata', () => {
        const errorSuccessFalse = new FetchError(apiErrors.general.status, apiErrors.general.message);
        const expected = new FetchError(apiErrors.errorsInResponse.status, apiErrors.errorsInResponse.message, undefined, undefined,
            {
                error: errorSuccessFalse,
                fields: [apiErrors.emptyResData.message, apiErrors.noAppState.message]
            });

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.successFalseFetchResponseWithMetaData, keyToTest, true);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toStrictEqual(expected);
        expect(findKeyInObjectSpy).toHaveBeenCalled();
        expect(setApplicationStateSpy).not.toHaveBeenCalled();
        expect(getErrorFromFieldNameSpy).toHaveBeenCalled();
    });

    test.each(fetchResponseProvider.populatedFetchResponse)('Call with Shipping Address / Shipping Lines populated data', (data) => {
        const resultCheckApiResponse = checkApiResponse(data, [keysToTestFromResponse.data, keysToTestFromResponse.applicationState, keysToTestFromResponse.initial_data]);
        expect(resultCheckApiResponse.success).toBe(true);
        expect(resultCheckApiResponse.error).toBeNull();
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(3);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(1);
        expect(setOrderInitialDataSpy).toHaveBeenCalledTimes(1);
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
        const keyToTest: Array<string> = [keysToTestFromResponse.data, keysToTestFromResponse.applicationState];
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

    test('Call with undefined initial state', () => {
        const {errorsInResponse} = apiErrors;

        const resultCheckApiResponse = checkApiResponse(fetchResponseProvider.undefinedInitialDataFetchResponse, [keysToTestFromResponse.initial_data]);
        expect(resultCheckApiResponse.success).toBe(false);
        expect(resultCheckApiResponse.error).toBeInstanceOf(FetchError);
        expect((resultCheckApiResponse.error as FetchError).status).toBe(errorsInResponse.status);
        expect((resultCheckApiResponse.error as FetchError).message).toStrictEqual(errorsInResponse.message);
        expect((resultCheckApiResponse.error as FetchError).metaData).toStrictEqual({fields: ['initial_data is empty in response']});
        expect(findKeyInObjectSpy).toHaveBeenCalledTimes(1);
        expect(setApplicationStateSpy).toHaveBeenCalledTimes(0);
        expect(setOrderInitialDataSpy).toHaveBeenCalledTimes(0);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledTimes(1);
        expect(getErrorFromFieldNameSpy).toHaveBeenCalledWith('initial_data');
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
    const errorSuccessFalseWithMetaData = new FetchError(apiErrors.general.status, apiErrors.general.message, undefined, null, {error: errorSuccessFalse});
    return {
        emptyFetchResponse: {
            status: 200,
            success: true,
            error: null,
            response: null,
        },
        undefinedDataFetchResponse: {
            status: 200,
            success: true,
            error: null,
            response: {
                data: undefined,
            },
        },
        successFalseFetchResponse: {
            status: 500,
            success: false,
            error: errorSuccessFalse,
            response: null,
        },
        successFalseFetchResponseWithMetaData: {
            status: 500,
            success: false,
            error: errorSuccessFalseWithMetaData,
            response: {
                data: undefined,
            },
        },
        undefinedApplicationStateFetchResponse: {
            status: 200,
            success: true,
            error: null,
            response: {
                data: {
                    shipping_lines: selectShippingLineArrayMock,
                    application_state: undefined
                }
            },
        },
        undefinedInitialDataFetchResponse: {
            status: 200,
            success: true,
            error: null,
            response: {
                data: {
                    initial_data: undefined,
                    application_state: applicationStateMock
                }
            },
        },
        undefinedShippingLinesFetchResponse: {
            status: 200,
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
                status: 200,
                success: true,
                error: null,
                response: {
                    data: {
                        address: shippingAddressMock,
                        application_state: applicationStateMock,
                        initial_data: orderInitialDataMock,
                    }
                }
            }, {
                status: 200,
                success: true,
                error: null,
                response: {
                    data: {
                        shipping_lines: selectShippingLineArrayMock,
                        application_state: applicationStateMock,
                        initial_data: orderInitialDataMock,
                    }
                }
            },
        ]
    };
}
