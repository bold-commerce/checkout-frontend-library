import {pigiActionTypes, IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction, sendPigiActionAsync} from 'src';

const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_HIDE_CREDIT_CARD_OPTION };
/**
 * ## sendHideCreditCardOptionAction
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 */
export function sendHideCreditCardOptionAction(): IApiReturnObject {
    return sendPigiAction(action);
}

/**
 * ## sendHideCreditCardOptionActionAsync
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 *
 * This method waits for a response back from PIGI before returning.
 */
export async function sendHideCreditCardOptionActionAsync(): Promise<IPigiResponseType> {
    return await sendPigiActionAsync(action);
}
