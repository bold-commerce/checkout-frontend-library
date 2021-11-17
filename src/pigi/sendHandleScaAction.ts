import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, sendAction} from 'src';

/**
 * ## sendHandleScaAction
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 */
export function sendHandleScaAction(clientSecretToken?: string): IApiReturnObject {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_HANDLE_SCA,
        payload: {
            clientSecretToken
        }
    };
    return sendAction(action);
}
