import {apiErrors, baseReturnObject, pigiActionTypes} from 'src/variables';
import {getPigiFrameWindow, FetchError, IApiReturnObject, IPigiAction} from 'src';

/**
 * ## sendRefreshOrderAction
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 */
export function sendRefreshOrderAction(): IApiReturnObject {
    const response = {...baseReturnObject};
    const action: IPigiAction = { actionType: pigiActionTypes.PIGI_REFRESH_ORDER };
    const iframeWindow = getPigiFrameWindow();
    if (iframeWindow){
        iframeWindow.postMessage(action, '*');
        response.success = true;
    } else {
        response.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
    }
    return response;
}
