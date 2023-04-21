import {externalPaymentGatewayToParentActionTypes} from 'src/variables/constants';
import {IExternalPaymentGateway} from 'src';

let externalPaymentGatewayMessageListener: (this: Window, ev: MessageEvent) => void;

export function setExternalPaymentGatewayListener(paymentGateway: IExternalPaymentGateway, callback: EventListenerOrEventListenerObject): void {
    //unsubscribe from any orphan listeners before subscribing/resubscribing
    window.removeEventListener('message', externalPaymentGatewayMessageListener);

    externalPaymentGatewayMessageListener = (event: MessageEvent) => {
        const {type} = event.data || {};
        if (type && type in externalPaymentGatewayToParentActionTypes) {
            if (typeof callback === 'function') {
                callback(event);
            } else {
                callback.handleEvent(event);
            }
        }
    };

    window.addEventListener('message', externalPaymentGatewayMessageListener);
}

/**
 * Remove the callback that receives the responses from external payment gateways
 */
export function removeExternalPaymentGatewayListener(): void{
    window.removeEventListener('message', externalPaymentGatewayMessageListener);
}
