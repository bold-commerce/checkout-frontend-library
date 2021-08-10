import {apiErrors, baseReturnObject} from 'src/variables';
import {getPigiFrameWindow, FetchError, IApiReturnObject, IPigiActionType} from 'src';

/**
 * ## sendAction
 *
 * This function sends a Action to the iFrame using postMessage
 */
export function sendAction(action: IPigiActionType): IApiReturnObject {
    const response = {...baseReturnObject};
    const iframeWindow = getPigiFrameWindow();
    if (iframeWindow){
        iframeWindow.postMessage(action, '*');
        response.success = true;
    } else {
        response.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
    }
    return response;
}
