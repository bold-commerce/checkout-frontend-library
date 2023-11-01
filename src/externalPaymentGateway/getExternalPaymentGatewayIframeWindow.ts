import {IExternalPaymentGateway} from 'src';

/**
 * Get the contentWindow of the external payment gateway iFrame
 */
export function getExternalPaymentGatewayIframeWindow(externalPaymentGateway: IExternalPaymentGateway): WindowProxy | null {
    const iframeElement = <HTMLIFrameElement|null> document.getElementById(externalPaymentGateway.public_id);
    if (iframeElement) {
        return iframeElement.contentWindow || null;
    }
    return null;
}
