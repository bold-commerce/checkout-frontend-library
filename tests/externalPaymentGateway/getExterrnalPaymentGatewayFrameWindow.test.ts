import {getExternalPaymentGatewayIframeWindow, IExternalPaymentGateway} from 'src';

describe('testing get external payment gateway frame window', () => {
    const id = 'mememe';
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;
    const selector = id;
    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: id, currency: ''
    };

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('calling getExternalPaymentGatewayIframeWindow success', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', id);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const getElementByIdSpy = jest.spyOn(document, 'getElementById');

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(getElementByIdSpy).toHaveBeenCalledTimes(calledOnce);
        expect(getElementByIdSpy).toHaveBeenCalledWith(selector);
        expect(res).not.toBeNull();
        expect(res).toBe(iFrame.contentWindow);
    });

    test('calling getExternalPaymentGatewayIframeWindow unbound iframe', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', id);
        iFrame.src = src;
        const getElementByIdSpy = jest.spyOn(document, 'getElementById');
        getElementByIdSpy.mockReturnValue(iFrame);

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(getElementByIdSpy).toHaveBeenCalledTimes(calledOnce);
        expect(getElementByIdSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
    });

    test('calling getExternalPaymentGatewayIframeWindow no iframe found', () => {
        const getElementByIdSpy = jest.spyOn(document, 'getElementById');
        getElementByIdSpy.mockReturnValue(null);

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(getElementByIdSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
    });

    test('calling getExternalPaymentGatewayIframeWindow with an ID that starts with a number works', ()=> {
        const iFrame = document.createElement('iframe');
        const numId = '3test';
        gateway.public_id = numId;
        iFrame.setAttribute('id', numId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const getElementByIdSpy = jest.spyOn(document, 'getElementById');

        const res = getExternalPaymentGatewayIframeWindow(gateway);

        expect(getElementByIdSpy).toHaveBeenCalledTimes(calledOnce);
        expect(getElementByIdSpy).toHaveBeenCalledWith(numId);
        expect(res).not.toBeNull();
        expect(res).toBe(iFrame.contentWindow);
    });
});

