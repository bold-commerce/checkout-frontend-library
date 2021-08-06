import {IPigiActionTypes, setPigiListener} from 'src';
import {pigi, pigiActionTypes} from 'src/variables';

describe('testing set pigi listener', () => {
    const iFrameId = '#PIGI';
    const noHashTagIFrameId = 'PIGI';
    const calledOnce = 1;
    const notCalled = 0;
    const pigiActionTypesKeys = Object.keys(pigiActionTypes);
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
        jest.restoreAllMocks();
    });

    test.each(pigiActionTypesKeys)('calling setPigiListener with function listener and action %s', key => {
        jest.restoreAllMocks();
        const eventInit = { data: { responseType: pigiActionTypes[key as keyof IPigiActionTypes], payload: {something: 'test'} } };
        const event = new MessageEvent('test', eventInit);
        const eventHandlerFunction: EventListener = jest.fn();
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));

        setPigiListener(iFrameId, eventHandlerFunction);

        expect(addEventListenerSpy).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerFunction).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerFunction).toHaveBeenCalledWith(event);
        expect(pigi.iFrameId).toBe(noHashTagIFrameId);
    });

    test.each(pigiActionTypesKeys)('calling setPigiListener with object listener and action %s', key => {
        jest.restoreAllMocks();
        const eventInit = { data: { responseType: pigiActionTypes[key as keyof IPigiActionTypes], payload: {something: 'test'} } };
        const event = new MessageEvent('test', eventInit);
        const eventHandlerObject: EventListenerObject = {handleEvent: jest.fn()};
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));

        setPigiListener(iFrameId, eventHandlerObject);

        expect(addEventListenerSpy).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerObject.handleEvent).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerObject.handleEvent).toHaveBeenCalledWith(event);
        expect(pigi.iFrameId).toBe(noHashTagIFrameId);
    });

    test('calling setPigiListener invalid action type', () => {
        const eventInit = { data: { responseType: 'invalid_action_type', payload: {something: 'test'} } };
        const event = new MessageEvent('test', eventInit);
        const eventHandlerFunction: EventListener = jest.fn();
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));

        setPigiListener(iFrameId, eventHandlerFunction);

        expect(addEventListenerSpy).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerFunction).toHaveBeenCalledTimes(notCalled);
        expect(pigi.iFrameId).toBe(noHashTagIFrameId);
    });

    test('calling setPigiListener invalid data', () => {
        const eventInit = {};
        const event = new MessageEvent('test', eventInit);
        const eventHandlerFunction: EventListener = jest.fn();
        const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce(getAddEventListenerImplementation(event));

        setPigiListener(iFrameId, eventHandlerFunction);

        expect(addEventListenerSpy).toHaveBeenCalledTimes(calledOnce);
        expect(eventHandlerFunction).toHaveBeenCalledTimes(notCalled);
        expect(pigi.iFrameId).toBe(noHashTagIFrameId);
    });
});

