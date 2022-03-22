import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction} from 'src';
import {pigiActionTypes} from 'src/variables';
import { sendPigiActionAsync } from '.';

/**
 * ## sendUpdateMediaMatchAction
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 */
export function sendUpdateMediaMatchAction(conditionText: string, matches: boolean): IApiReturnObject {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH,
        payload: {conditionText, matches}
    };

    return sendPigiAction(action);
}

/**
 * ## sendUpdateMediaMatchActionAsync
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 * 
 * This method waits for a response back from PIGI before returning.
 */
export async function sendUpdateMediaMatchActionAsync(conditionText: string, matches: boolean): Promise<IPigiResponseType> {
    const action: IPigiActionType = {
        actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH,
        payload: {conditionText, matches}
    };

    return await sendPigiActionAsync(action);
}
