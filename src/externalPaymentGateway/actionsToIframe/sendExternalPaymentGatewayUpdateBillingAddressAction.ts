import {
    externalPaymentGatewayToIframeActionTypes, IAddress,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewayUpdateBillingAddressAction(paymentGateway: IExternalPaymentGateway, address: IAddress): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED,
        payload: address,
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
