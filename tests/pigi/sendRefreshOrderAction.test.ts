import {FetchError, IPigiAction, sendRefreshOrderAction} from 'src';
import {apiErrors, baseReturnObject, pigi, pigiActionTypes} from 'src/variables';
import * as getPigiFrameWindow from 'src/pigi/getPigiFrameWindow';

describe('testing send pigi Refresh Order Action', () => {
    pigi.iFrameId = 'PIGI';
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;
    let getPigiFrameWindowSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        getPigiFrameWindowSpy = jest.spyOn(getPigiFrameWindow, 'getPigiFrameWindow');
    });

    test('calling sendRefreshOrderAction success', () => {
        const action: IPigiAction = { actionType: pigiActionTypes.PIGI_REFRESH_ORDER };
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const res = sendRefreshOrderAction();

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendRefreshOrderAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        getPigiFrameWindowSpy.mockReturnValueOnce(null);

        const res = sendRefreshOrderAction();

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

