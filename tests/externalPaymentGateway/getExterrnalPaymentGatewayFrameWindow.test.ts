import {getExternalPaymentGatewayIframeWindow, IExternalPaymentGateway} from 'src';

describe('testing get external payment gateway frame window', () => {
    const id = 'mememe';
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;
    const selector = 'iframe#'+id;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: id, target_div: id, currency: ''
    };

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('calling getExternalPaymentGatewayIframeWindow success', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', id);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const querySelectorSpy = jest.spyOn(document, 'querySelector');

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(querySelectorSpy).toHaveBeenCalledTimes(calledOnce);
        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).not.toBeNull();
        expect(res).toBe(iFrame.contentWindow);
    });

    test('calling getExternalPaymentGatewayIframeWindow unbound iframe', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', id);
        iFrame.src = src;
        const querySelectorSpy = jest.spyOn(document, 'querySelector');
        querySelectorSpy.mockReturnValue(iFrame);

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(querySelectorSpy).toHaveBeenCalledTimes(calledOnce);
        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
    });

    test('calling getExternalPaymentGatewayIframeWindow no iframe found', () => {
        const querySelectorSpy = jest.spyOn(document, 'querySelector');
        querySelectorSpy.mockReturnValue(null);

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
    });
});

