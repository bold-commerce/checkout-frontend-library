import {FetchError, IPigiActionType, sendAction} from 'src';
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

    test('calling sendAction success', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const res = sendAction(action);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        getPigiFrameWindowSpy.mockReturnValueOnce(null);

        const res = sendAction(action);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});
