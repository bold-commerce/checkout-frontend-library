import {
    sendExternalPaymentGatewayProcessOrderAction,
    IExternalPaymentGateway
} from 'src';
import * as sendExternalPaymentGatewayActionToIframe from 'src/externalPaymentGateway/actionsToIframe/sendExternalPaymentGatewayActionToIframe';

describe('testing send external payment gateway process order action', () => {
    let sendExternalPaymentGatewayActionToIframeSpy: jest.SpyInstance;
    const calledOnce = 1;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '', currency: ''
    };

    beforeEach(() => {
        jest.restoreAllMocks();
        sendExternalPaymentGatewayActionToIframeSpy = jest.spyOn(sendExternalPaymentGatewayActionToIframe, 'sendExternalPaymentGatewayActionToIframe');
        sendExternalPaymentGatewayActionToIframeSpy.mockImplementation(() => null);
    });

    test('calling send external payment gateway process order success', () => {
        sendExternalPaymentGatewayProcessOrderAction(gateway);

        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledTimes(calledOnce);
    });
});

