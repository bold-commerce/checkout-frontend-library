import {FetchError, IApiReturnObject, IPigiActionType, getPigiFrameWindow} from 'src';
import {apiErrors, pigiActionTypes, baseReturnObject} from 'src/variables';

export function sendUpdateLanguageAction(languageCode: string): IApiReturnObject {
    const iFrameWindow = getPigiFrameWindow();
    const response = {...baseReturnObject};
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };

    if (iFrameWindow) {
        response.success = true;
        iFrameWindow.postMessage(action, '*');
    } else {
        response.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
    }
    return response;
}
