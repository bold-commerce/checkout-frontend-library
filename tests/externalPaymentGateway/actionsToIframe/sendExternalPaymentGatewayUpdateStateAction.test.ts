import {
    sendExternalPaymentGatewayUpdateStateAction,
    IExternalPaymentGateway,
    IInitializeOrderResponse
} from 'src';
import * as sendExternalPaymentGatewayActionToIframe from 'src/externalPaymentGateway/actionsToIframe/sendExternalPaymentGatewayActionToIframe';
import {initializeOrderResponseMock} from 'src/variables/mocks';

describe('testing send external payment gateway update state Message Action', () => {
    let sendExternalPaymentGatewayActionToIframeSpy: jest.SpyInstance;
    const calledOnce = 1;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '',
    };
    const state: IInitializeOrderResponse = initializeOrderResponseMock;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendExternalPaymentGatewayActionToIframeSpy = jest.spyOn(sendExternalPaymentGatewayActionToIframe, 'sendExternalPaymentGatewayActionToIframe');
        sendExternalPaymentGatewayActionToIframeSpy.mockImplementation(() => null);
    });

    test('calling send external payment gatewy update state success', () => {
        sendExternalPaymentGatewayUpdateStateAction(gateway, state);

        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledTimes(calledOnce);
    });
});

