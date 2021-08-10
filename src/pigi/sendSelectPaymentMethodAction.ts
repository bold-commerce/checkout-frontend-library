import {IApiReturnObject, IPigiActionType, sendAction} from 'src';
import {pigiActionTypes} from 'src/variables';

/**
 * ## sendSelectPaymentMethodAction
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 */
export function sendSelectPaymentMethodAction(payload: {index?: number, gatewayName?: string}): IApiReturnObject {
    const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};

    return sendAction(action);
}
