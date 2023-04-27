import {IExternalPaymentGateway} from 'src';

/**
 * Get the contentWindow of the external payment gateway iFrame
 */
export function getExternalPaymentGatewayIframeWindow(externalPaymentGateway: IExternalPaymentGateway): WindowProxy | null {
    const selector = `iframe#${externalPaymentGateway.target_div}`;
    const iframeElement: HTMLIFrameElement | null = document.querySelector(selector);
    if (iframeElement) {
        return iframeElement.contentWindow || null;
    }
    return null;
}
