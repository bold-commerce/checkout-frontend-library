import {apiErrors, generalApiResponseParsingErrorType, keysToTestFromResponse, IErrorFormat} from 'src';

export function getErrorFromFieldName(fieldName: string, errorType = generalApiResponseParsingErrorType.emptyField): IErrorFormat {
    switch (fieldName) {
        case keysToTestFromResponse.data:
            return errorType === generalApiResponseParsingErrorType.emptyField ? apiErrors.emptyResData : apiErrors.noResData;
        case keysToTestFromResponse.applicationState:
            return errorType === generalApiResponseParsingErrorType.emptyField ? apiErrors.emptyAppState : apiErrors.noAppState;
        default:
            return errorType === generalApiResponseParsingErrorType.emptyField ? apiErrors.emptyFieldInResponse : apiErrors.noFieldInResponse;
    }
}
