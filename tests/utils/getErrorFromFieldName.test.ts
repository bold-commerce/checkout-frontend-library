import {apiErrors, generalApiResponseParsingErrorType, keysToTestFromResponse, getErrorFromFieldName} from 'src';

describe('Test getErrorFromFieldName function', () => {
    test('Test when errorType is not provided', () => {
        const errorReturned = getErrorFromFieldName(keysToTestFromResponse.data);
        expect(errorReturned).toBe(apiErrors.emptyResData);
    });

    test('Test when fieldName is `data` and errorType is undefined', () => {
        const errorReturned = getErrorFromFieldName(keysToTestFromResponse.data, undefined);
        expect(errorReturned).toBe(apiErrors.emptyResData);
    });

    test('Test when fieldName is `data` and errorType is provided but not known by function', () => {
        const errorReturned = getErrorFromFieldName(keysToTestFromResponse.data, 'test');
        expect(errorReturned).toBe(apiErrors.noResData);
    });

    test('Test when fieldName is `data` and errorType is provided and known by function', () => {
        const errorEmpty = getErrorFromFieldName(keysToTestFromResponse.data, generalApiResponseParsingErrorType.emptyField);
        expect(errorEmpty).toBe(apiErrors.emptyResData);
        const errorNotPresent = getErrorFromFieldName(keysToTestFromResponse.data, generalApiResponseParsingErrorType.noField);
        expect(errorNotPresent).toBe(apiErrors.noResData);
    });

    test('Test when fieldName is `application_state`', () => {
        const errorEmpty = getErrorFromFieldName(keysToTestFromResponse.applicationState);
        expect(errorEmpty).toBe(apiErrors.emptyAppState);
        const errorNotPresent = getErrorFromFieldName(keysToTestFromResponse.applicationState, generalApiResponseParsingErrorType.noField);
        expect(errorNotPresent).toBe(apiErrors.noAppState);
    });

    test('Test when fieldName is not `data` and not `application_state`', () => {
        const errorEmpty = getErrorFromFieldName('dummy_name');
        expect(errorEmpty).toBe(apiErrors.emptyFieldInResponse);
        const errorNotPresent = getErrorFromFieldName('other_dummy_name', generalApiResponseParsingErrorType.noField);
        expect(errorNotPresent).toBe(apiErrors.noFieldInResponse);
    });
});
