import {
    externalPaymentGatewayToIframeActionTypes, IAddress,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewayUpdateShippingAddressAction(paymentGateway: IExternalPaymentGateway, address: IAddress): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_SHIPPING_ADDRESS_CHANGED,
        payload: address,
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
