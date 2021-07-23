import {
    FetchError,
    findKeyInObject,
    getErrorFromFieldName,
    IApiResponse,
    IApiReturnObject,
    IApplicationState,
} from 'src';
import {
    apiErrors,
    generalApiResponseParsingErrorType,
    keysToTestFromResponse
} from 'src/variables';
import {setApplicationState} from 'src/state';

export function checkApiResponse(fetchRes: IApiReturnObject, keysToCheck?: Array<string>): IApiReturnObject {
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;
    const errorMessages: Array<string> = [];

    if (!keysToCheck || (Array.isArray(keysToCheck) && keysToCheck.length <= 0)) {
        fetchRes.success = false;
        fetchRes.error = new FetchError(apiErrors.emptyKeysToCheck.status, apiErrors.emptyKeysToCheck.message);
        return fetchRes;
    }
    if(success) {
        keysToCheck.map((key: string) => {
            const parentElement = findKeyInObject(response, key);
            if (parentElement || parentElement === '') {
                let valueExtractedFromObject = response;
                if (parentElement !== '') {
                    const pathToElement = parentElement.toString().split('.');
                    pathToElement.forEach((pathKey) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        valueExtractedFromObject = valueExtractedFromObject[pathKey];
                    });
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (!valueExtractedFromObject[key]) {
                    const error = getErrorFromFieldName(key);
                    errorMessages.push(error.message.replace('{{field}}', key));
                } else if (key === keysToTestFromResponse.applicationState) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setApplicationState(valueExtractedFromObject[key] as unknown as IApplicationState);
                }
            } else {
                const error = getErrorFromFieldName(key, generalApiResponseParsingErrorType.noField);
                errorMessages.push(error.message.replace('{{field}}', key));
            }
        });

        if (errorMessages.length > 0) {
            fetchRes.success = false;
            fetchRes.error = new FetchError(apiErrors.errorsInResponse.status, apiErrors.errorsInResponse.message, undefined, undefined, {fields: errorMessages});
        }
    }
    return fetchRes;
}
