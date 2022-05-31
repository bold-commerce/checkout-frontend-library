import {pigiActionTypes} from 'src';
import {pigi} from 'src/variables';

let pigiMessageListener: (this: Window, ev: MessageEvent) => void;

/**
 * ## setPigiListener
 * Set the PIGI iFrame id to be used for the actions
 * and the callback that will receive the responses from PIGI iFrame.
 *
 * @param iFrameId Provide the Pigi iFrame Id.
 * @param callback Provide the callback function to call when PIGI responses are received.
 *
 * @returns The function used to subscribe to pigi messages, needed to unsubscribe from listener
 */
export function setPigiListener(iFrameId: string, callback: EventListenerOrEventListenerObject): void {
    //unsubscribe from any orphan listeners before subscribing/resubscribing
    window.removeEventListener('message', pigiMessageListener);

    pigi.iFrameId = iFrameId.replace('#', '');
    pigiMessageListener = (event: MessageEvent) => {
        const {responseType} = event.data || {};
        if (responseType && responseType in pigiActionTypes) {
            if(typeof callback === 'function') {
                callback(event);
            } else {
                callback.handleEvent(event);
            }
        }
    };
    window.addEventListener('message', pigiMessageListener);
}

/**
 * ## removePigiListener
 * Remove the callback that receives the responses from PIGI iFrame.
 *
 */
export function removePigiListener(): void{
    window.removeEventListener('message', pigiMessageListener);
}
