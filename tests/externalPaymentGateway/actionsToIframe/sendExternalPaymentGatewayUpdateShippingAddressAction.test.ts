import {
    sendExternalPaymentGatewayUpdateShippingAddressAction,
    IExternalPaymentGateway,
    baseReturnObject
} from 'src';
import * as sendExternalPaymentGatewayActionToIframe from 'src/externalPaymentGateway/actionsToIframe/sendExternalPaymentGatewayActionToIframe';
import {applicationStateMock, shippingAddressMock} from 'src/variables/mocks';

describe('testing send external payment gateway update billing address Action', () => {
    const returnObject = {...baseReturnObject};
    let sendExternalPaymentGatewayActionToIframeSpy: jest.SpyInstance;
    const calledOnce = 1;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', currency: ''
    };

    beforeEach(() => {
        jest.restoreAllMocks();
        sendExternalPaymentGatewayActionToIframeSpy = jest.spyOn(sendExternalPaymentGatewayActionToIframe, 'sendExternalPaymentGatewayActionToIframe');
        sendExternalPaymentGatewayActionToIframeSpy.mockImplementation(() => null);
        returnObject.response = { data: { address: shippingAddressMock, application_state: applicationStateMock }};
    });

    test('calling send external payment gateway update billing address success', () => {
        sendExternalPaymentGatewayUpdateShippingAddressAction(gateway, shippingAddressMock);

        expect(sendExternalPaymentGatewayActionToIframeSpy).toHaveBeenCalledTimes(calledOnce);
    });
});

