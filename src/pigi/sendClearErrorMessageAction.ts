import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction, sendPigiActionAsync} from 'src';

const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_CLEAR_ERROR_MESSAGES };
/**
 * ## sendClearErrorMessageAction
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 */
export function sendClearErrorMessageAction(): IApiReturnObject {
    return sendPigiAction(action);
}

/**
 * ## sendClearErrorMessageActionAsync
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 * 
 * This method waits for a response back from PIGI before returning.
 */
export async function sendClearErrorMessageActionAsync(): Promise<IPigiResponseType> {
    return await sendPigiActionAsync(action);
}
