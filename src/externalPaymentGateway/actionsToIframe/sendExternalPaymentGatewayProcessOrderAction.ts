import {
    externalPaymentGatewayToIframeActionTypes,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewayProcessOrderAction(paymentGateway: IExternalPaymentGateway): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED,
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
