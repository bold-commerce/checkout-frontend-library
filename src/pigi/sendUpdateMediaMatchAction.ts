import {IApiReturnObject, IPigiActionType, sendAction} from 'src';
import {pigiActionTypes} from 'src/variables';

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

    return sendAction(action);
}
