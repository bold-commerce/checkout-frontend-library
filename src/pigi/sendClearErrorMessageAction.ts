import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, sendAction} from 'src';

/**
 * ## sendClearErrorMessageAction
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 */
export function sendClearErrorMessageAction(): IApiReturnObject {
    const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_CLEAR_ERROR_MESSAGES };
    return sendAction(action);
}
