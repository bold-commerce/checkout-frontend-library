import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction, sendPigiActionAsync} from 'src';

/**
 * ## sendDisplayErrorMessageAction
 *
 * This action is to be sent if PIGI was displayed and we need to disdplay an error message.
 */
export function sendDisplayErrorMessageAction(message: string, subType: string): IApiReturnObject {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
        payload: {
            message: message,
            sub_type: subType
        }
    };
    return sendPigiAction(action);
}


/**
 * ## sendDisplayErrorMessageActionAsync
 *
 * This action is to be sent if PIGI was displayed and we need to display an error message.
 * 
 * This method waits for a response back from PIGI before returning.
 */
export async function sendDisplayErrorMessageActionAsync(message: string, subType: string): Promise<IPigiResponseType> {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
        payload: {
            message: message,
            sub_type: subType
        }
    };
    return await sendPigiActionAsync(action);
}
