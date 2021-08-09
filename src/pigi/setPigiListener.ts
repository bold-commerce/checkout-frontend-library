import {pigi, pigiActionTypes} from 'src/variables';

/**
 * ## setPigiListener
 * Set the PIGI iFrame id to be used for the actions
 * and the callback that will receive the responses from PIGI iFrame.
 *
 * @param iFrameId Provide the Pigi iFrame Id.
 * @param callback Provide the callback function to call when PIGI responses are received.
 */
export function setPigiListener(iFrameId: string, callback: EventListenerOrEventListenerObject): void {
    pigi.iFrameId = iFrameId.replace('#', '');
    window.addEventListener('message', (event: MessageEvent) => {
        const {responseType} = event.data || {};
        if (responseType && responseType in pigiActionTypes) {
            if(typeof callback === 'function') {
                callback(event);
            } else {
                callback.handleEvent(event);
            }
        }
    });
}
