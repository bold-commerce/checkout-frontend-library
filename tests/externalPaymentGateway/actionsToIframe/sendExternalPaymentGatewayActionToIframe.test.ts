import {
    externalPaymentGatewayToIframeActionTypes,
    IExternalPaymentGateway,
    sendExternalPaymentGatewayActionToIframe
} from 'src';
import * as getExternalPaymentGatewayIframeWindow from 'src/externalPaymentGateway/getExternalPaymentGatewayIframeWindow';

describe('testing send external payment gateway action to iframe', () => {
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '', currency: ''
    };

    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const iFrame = document.createElement('iframe');
    iFrame.setAttribute('id', 'id');
    iFrame.src = src;
    document.body.appendChild(iFrame);
    const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
    const getExternalPaymentGatewayIframeWindowSpy = jest.spyOn(getExternalPaymentGatewayIframeWindow, 'getExternalPaymentGatewayIframeWindow');
    getExternalPaymentGatewayIframeWindowSpy.mockReturnValue(iFrame.contentWindow as Window);

    test('calling sendExternalPaymentGatewayActionToIframe success', () => {
        const action = {type: externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE};
        sendExternalPaymentGatewayActionToIframe(gateway, action);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
    });
});
