import {
    externalPaymentGatewayToIframeActionTypes,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    IInitializeOrderResponse,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewaySetConfigAction(paymentGateway: IExternalPaymentGateway): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG,
        payload: paymentGateway,
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
