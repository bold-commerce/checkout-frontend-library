import {
    setExternalPaymentGatewayListener,
    IExternalPaymentGateway,
    externalPaymentGatewayToParentActionTypes,
    removeExternalPaymentGatewayListener
} from 'src';

describe('setExternalPaymentGatewayListener', () => {
    const getAddEventListenerImplementation = (event: MessageEvent)  => {
        return (type: string, listener: EventListenerOrEventListenerObject) => {
            if(typeof listener === 'function') {
                listener(event);
            } else {
                listener.handleEvent(event);
            }
        };
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const gateway: IExternalPaymentGateway = {
        base_url: '', iframe_url: '', is_test: false, location: '', public_id: '', target_div: '', currency: ''
    };

    test('successful initialize', async () => {
        const eventInit = {data: {type: externalPaymentGatewayToParentActionTypes.EXTERNAL_PAYMENT_GATEWAY_INITIALIZED, payload: {something: 'test'}}};
        const event = new MessageEvent('test', eventInit);
        const eventHandlerFunction: EventListener = jest.fn();
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
        setExternalPaymentGatewayListener(gateway, eventHandlerFunction);
        removeExternalPaymentGatewayListener();
        expect(removeEventListenerSpy).toHaveBeenCalledTimes(2);
        expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
        expect(eventHandlerFunction).toHaveBeenCalledTimes(1);
        expect(eventHandlerFunction).toHaveBeenCalledWith(event);
    });

    test('successful initialize other handler', async () => {
        const eventInit = {data: {type: externalPaymentGatewayToParentActionTypes.EXTERNAL_PAYMENT_GATEWAY_INITIALIZED, payload: {something: 'test'}}};
        const event = new MessageEvent('test', eventInit);
        const eventHandlerFunction: EventListenerObject = {handleEvent: jest.fn()};
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
        setExternalPaymentGatewayListener(gateway, eventHandlerFunction);
        removeExternalPaymentGatewayListener();
        expect(removeEventListenerSpy).toHaveBeenCalledTimes(2);
        expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
        expect(eventHandlerFunction.handleEvent).toHaveBeenCalledTimes(1);
        expect(eventHandlerFunction.handleEvent).toHaveBeenCalledWith(event);
    });

    test('initialize with bunk data', async () => {
        const event = new MessageEvent('test');
        const eventHandlerFunction: EventListener = jest.fn();
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));
        setExternalPaymentGatewayListener(gateway, eventHandlerFunction);
        expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
        expect(eventHandlerFunction).toHaveBeenCalledTimes(0);
    });
});
