import {
    sendExternalPaymentGatewaySetConfigAction,
    IExternalPaymentGateway, externalPaymentGatewayToIframeActionTypes,
} from 'src';
import * as sendExternalPaymentGatewayActionToIframe from 'src/externalPaymentGateway/actionsToIframe/sendExternalPaymentGatewayActionToIframe';

describe('testing send external payment gateway set config action', () => {
    let sendExternalPaymentGatewayActionToIframeSpy: jest.SpyInstance;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '', currency: ''
    };

    const actionMock = {
        payload: gateway,
        type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG,
    };

    beforeEach(() => {
        jest.restoreAllMocks();
        sendExternalPaymentGatewayActionToIframeSpy = jest.spyOn(sendExternalPaymentGatewayActionToIframe, 'sendExternalPaymentGatewayActionToIframe');
        sendExternalPaymentGatewayActionToIframeSpy.mockImplementation(() => null);
    });

    test('calling send external payment gateway update state success', () => {
        sendExternalPaymentGatewaySetConfigAction(gateway);

        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledTimes(1);
        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledWith(gateway, actionMock);
    });
});
