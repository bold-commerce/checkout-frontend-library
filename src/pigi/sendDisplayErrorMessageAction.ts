import {apiErrors, baseReturnObject, pigiActionTypes} from 'src/variables';
import {getPigiFrameWindow, FetchError, IApiReturnObject, IPigiActionType} from 'src';

/**
 * ## sendDisplayErrorMessageAction
 *
 * This action is to be sent if PIGI was displayed and we need to disdplay an error message.
 */
export function sendDisplayErrorMessageAction(message: string, subType: string): IApiReturnObject {
    const response = {...baseReturnObject};
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
        payload: {
            message: message,
            sub_type: subType
        }
    };
    const iframeWindow = getPigiFrameWindow();
    if (iframeWindow){
        iframeWindow.postMessage(action, '*');
        response.success = true;
    } else {
        response.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
    }
    return response;
}
