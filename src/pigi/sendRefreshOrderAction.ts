import {pigiActionTypes} from 'src/variables';
import {IApiReturnObject, IPigiActionType, sendAction} from 'src';

/**
 * ## sendRefreshOrderAction
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 */
export function sendRefreshOrderAction(): IApiReturnObject {
    const action: IPigiActionType = { actionType: pigiActionTypes.PIGI_REFRESH_ORDER };
    return sendAction(action);
}
