import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction, sendPigiActionAsync} from 'src';

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
    return sendPigiAction(action);
}

/**
 * ## sendHandleScaActionAsync
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 * 
 * This method waits for a response back from PIGI before returning.
 */
export async function sendHandleScaActionAsync(clientSecretToken?: string): Promise<IPigiResponseType> {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_HANDLE_SCA,
        payload: {
            clientSecretToken
        }
    };
    return await sendPigiActionAsync(action);
}
