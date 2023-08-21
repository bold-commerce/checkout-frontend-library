import {
    apiErrors,
    generalApiResponseParsingErrorType,
    keysToTestFromResponse,
    FetchError,
    findKeyInObject,
    getErrorFromFieldName,
    IApiResponse,
    IApiReturnObject,
    IApplicationState,
    IOrderInitialData,
} from 'src';
import {setApplicationState} from 'src/state';
import {setOrderInitialData} from 'src/state/setOrderInitialData';

export function checkApiResponse(fetchRes: IApiReturnObject, keysToCheck?: Array<string>, checkOnFail = false): IApiReturnObject {
    const success = fetchRes.success;
    const response = fetchRes.response as IApiResponse;
    const errorMessages: Array<string> = [];

    if (!keysToCheck || (Array.isArray(keysToCheck) && keysToCheck.length <= 0)) {
        fetchRes.success = false;
        fetchRes.error = new FetchError(apiErrors.emptyKeysToCheck.status, apiErrors.emptyKeysToCheck.message);
        return fetchRes;
    }
    if(checkOnFail || success) {
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
                } else if (key === keysToTestFromResponse.initial_data) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setOrderInitialData(valueExtractedFromObject[key] as unknown as IOrderInitialData);
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
