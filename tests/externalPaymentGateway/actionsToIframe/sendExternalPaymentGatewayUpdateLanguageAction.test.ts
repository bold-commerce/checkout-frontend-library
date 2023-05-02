import {
    sendExternalPaymentGatewayUpdateLanguageAction,
    IExternalPaymentGateway,
    IInitializeOrderResponse
} from 'src';
import * as sendExternalPaymentGatewayActionToIframe from 'src/externalPaymentGateway/actionsToIframe/sendExternalPaymentGatewayActionToIframe';
import {initializeOrderResponseMock} from 'src/variables/mocks';

describe('testing send external payment gateway update language Action', () => {
    let sendExternalPaymentGatewayActionToIframeSpy: jest.SpyInstance;
    const calledOnce = 1;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '', currency: ''
    };
    const state: IInitializeOrderResponse = initializeOrderResponseMock;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendExternalPaymentGatewayActionToIframeSpy = jest.spyOn(sendExternalPaymentGatewayActionToIframe, 'sendExternalPaymentGatewayActionToIframe');
        sendExternalPaymentGatewayActionToIframeSpy.mockImplementation(() => null);
    });

    test('calling send external payment gateway update language success', () => {
        sendExternalPaymentGatewayUpdateLanguageAction(gateway, 'US_en');

        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledTimes(calledOnce);
    });
});

