import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, sendAction} from 'src';

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
    return sendAction(action);
}
