import {
    externalPaymentGatewayToIframeActionTypes,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    IInitializeOrderResponse,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewayUpdateStateAction(paymentGateway: IExternalPaymentGateway, state: IInitializeOrderResponse): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE,
        payload: state
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
