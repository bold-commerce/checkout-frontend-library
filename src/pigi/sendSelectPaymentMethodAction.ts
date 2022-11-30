import {
    pigiActionTypes,
    IApiReturnObject,
    IPigiActionType,
    IPigiResponseType,
    sendPigiAction,
    sendPigiActionAsync
} from 'src';

/**
 * ## sendSelectPaymentMethodAction
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 */
export function sendSelectPaymentMethodAction(payload: {index?: number, gatewayName?: string}): IApiReturnObject {
    const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};

    return sendPigiAction(action);
}

/**
 * ## sendSelectPaymentMethodActionAsync
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 *
 * This method waits for a response back from PIGI before returning.
 */
export async function sendSelectPaymentMethodActionAsync(payload: {index?: number, gatewayName?: string}): Promise<IPigiResponseType> {
    const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload};

    return await sendPigiActionAsync(action);
}
