import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, IPigiResponseType, sendPigiAction} from 'src';
import { sendPigiActionAsync } from '.';


const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_REFRESH_ORDER };
/**
 * ## sendRefreshOrderAction
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 */
export function sendRefreshOrderAction(): IApiReturnObject {
    return sendPigiAction(action);
}

/**
 * ## sendRefreshOrderActionAsync
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 * 
 * This method waits for a response back from PIGI before returning.
 */
export async function sendRefreshOrderActionAsync(): Promise<IPigiResponseType> {
    return await sendPigiActionAsync(action);
}
