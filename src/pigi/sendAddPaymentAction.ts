import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, sendAction} from 'src';

/**
 * ## sendAddPaymentAction
 *
 * This action is to be sent after the customer has entered payment information
 * and the payment is to be added to the order so the order can be processed.
 *
 * This only tokenizes the payment information then puts it onto the order
 * and does not authorize or capture the payment.
 */
export function sendAddPaymentAction(): IApiReturnObject {
    const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_ADD_PAYMENT };
    return sendAction(action);
}
