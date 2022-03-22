import {FetchError, IPigiActionType, sendPigiAction, sendPigiActionAsync} from 'src';
import {apiErrors, baseReturnObject, pigi} from 'src/variables';
import * as getPigiFrameWindow from 'src/pigi/getPigiFrameWindow';

describe('testing send pigi Action', () => {
    pigi.iFrameId = 'PIGI';
    const action: IPigiActionType = { actionType: 'TEST_ACTION' };
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;
    let getPigiFrameWindowSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        getPigiFrameWindowSpy = jest.spyOn(getPigiFrameWindow, 'getPigiFrameWindow');
    });

    test('calling sendPigiAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const res = sendPigiAction(action);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendPigiAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        getPigiFrameWindowSpy.mockReturnValueOnce(null);

        const res = sendPigiAction(action);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendPigiActionAsync success', async () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const pigiResponse = {
            data: {
                responseType: 'TEST_ACTION',
                payload: {success: true}
            }
        };

        const addEventListenerMock = jest.fn((event, callback) => {
            callback(pigiResponse);
        });
        const removeEventListenerMock = jest.fn();

        window = Object.assign(window, {
            addEventListener: addEventListenerMock,
            removeEventListener: removeEventListenerMock
        });

        const res = await sendPigiActionAsync(action); 

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(addEventListenerMock).toHaveBeenCalled();
        expect(removeEventListenerMock).toHaveBeenCalled();
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(pigiResponse.data);
    });

    test('calling sendPigiActionAsync failed response from pigi', async () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const pigiResponse = {
            data: {
                responseType: 'TEST_ACTION',
                payload: {success: false}
            }
        };

        const addEventListenerMock = jest.fn((event, callback) => {
            callback(pigiResponse);
        });
        const removeEventListenerMock = jest.fn();

        window = Object.assign(window, {
            addEventListener: addEventListenerMock,
            removeEventListener: removeEventListenerMock
        });

        await sendPigiActionAsync(action).catch(error => {expect(error).toBe(pigiResponse.data);});

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(addEventListenerMock).toHaveBeenCalled();
        expect(removeEventListenerMock).toHaveBeenCalled();
    });

    test('calling sendPigiActionAsync invalid data', async () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const pigiResponse = {};

        const addEventListenerMock = jest.fn((event, callback) => {
            callback(pigiResponse);
        });
        const removeEventListenerMock = jest.fn();

        window = Object.assign(window, {
            addEventListener: addEventListenerMock,
            removeEventListener: removeEventListenerMock
        });

        
        await sendPigiActionAsync(action).catch(error => {expect(error).toBe('Pigi response timeout');}); 

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(addEventListenerMock).toHaveBeenCalled();
        expect(removeEventListenerMock).toHaveBeenCalled();
    });

    test('calling sendPigiActionAsync null Frame Window', async () => {
        const errorObject  = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        getPigiFrameWindowSpy.mockReturnValueOnce(null);

        const addEventListenerMock = jest.fn();
        const removeEventListenerMock = jest.fn();

        window = Object.assign(window, {
            addEventListener: addEventListenerMock,
            removeEventListener: removeEventListenerMock
        });

        await sendPigiActionAsync(action).catch(error => {expect(error).toStrictEqual(errorObject);});

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(addEventListenerMock).toHaveBeenCalled();
        expect(removeEventListenerMock).toHaveBeenCalled();
    });
});
