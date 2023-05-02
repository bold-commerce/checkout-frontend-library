import {
    externalPaymentGatewayToIframeActionTypes,
    IExternalPaymentGateway,
    IExternalPaymentGatewayActionType,
    sendExternalPaymentGatewayActionToIframe,
} from 'src';

export function sendExternalPaymentGatewayUpdateLanguageAction(paymentGateway: IExternalPaymentGateway, languageCode: string): void {
    const action: IExternalPaymentGatewayActionType = {
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    sendExternalPaymentGatewayActionToIframe(paymentGateway, action);
}
