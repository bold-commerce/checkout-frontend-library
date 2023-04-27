import {
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    getExternalPaymentGatewayIframeWindow,
} from 'src';

/**
 * This function sends a Action to the iFrame using postMessage
 */
export function sendExternalPaymentGatewayActionToIframe(paymentGateway: IExternalPaymentGateway, action: IExternalPaymentGatewayActionType): void {
    const iframeWindow = getExternalPaymentGatewayIframeWindow(paymentGateway);
    if (iframeWindow) {
        iframeWindow.postMessage(action, '*');
    }
}
