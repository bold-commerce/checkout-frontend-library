import {apiErrors, baseReturnObject} from 'src/variables';
import {getPigiFrameWindow, FetchError, IApiReturnObject, IPigiActionType, IPigiResponseType} from 'src';

/**
 * ## sendAction
 *
 * This function sends a Action to the iFrame using postMessage
 */
export function sendPigiAction(action: IPigiActionType): IApiReturnObject {
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

/**
 * ## sendActionAsync
 *
 * This function sends a Action to the iFrame using postMessage and waits for a response
 */
export function sendPigiActionAsync(action: IPigiActionType): Promise<IPigiResponseType> {
    return new Promise<IPigiResponseType>((resolve, reject) => {
        const iframeListener = (event: MessageEvent) => {
            const pigiResponse = event.data;
            if (pigiResponse && pigiResponse.responseType === action.actionType) {
                if (pigiResponse.payload.success) {
                    window.removeEventListener('message', iframeListener);
                    resolve(pigiResponse);
                } else {
                    window.removeEventListener('message', iframeListener);
                    reject(pigiResponse);
                }
            } 
        };

        window.addEventListener('message', iframeListener);
        const response = sendPigiAction(action);
        if(!response.success){
            window.removeEventListener('message', iframeListener);
            reject(response.error);
        }

        //Timeout if haven't heard answer in 3 seconds
        setTimeout(() => {
            window.removeEventListener('message', iframeListener);
            reject('Pigi response timeout');
        }, 3000);
    });
}
