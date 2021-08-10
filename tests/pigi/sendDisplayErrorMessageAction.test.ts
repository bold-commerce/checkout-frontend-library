import {FetchError, IPigiActionType, sendDisplayErrorMessageAction} from 'src';
import {apiErrors, baseReturnObject, pigi, pigiActionTypes} from 'src/variables';
import * as getPigiFrameWindow from 'src/pigi/getPigiFrameWindow';

describe('testing send pigi Display Error Message Action', () => {
    pigi.iFrameId = 'PIGI';
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;
    let getPigiFrameWindowSpy: jest.SpyInstance;
    const message = 'message';
    const subType = 'sub_type';

    beforeEach(() => {
        jest.restoreAllMocks();
        getPigiFrameWindowSpy = jest.spyOn(getPigiFrameWindow, 'getPigiFrameWindow');
    });

    test('calling sendDisplayErrorMessageAction success', () => {
        const action: IPigiActionType = {
            actionType: pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
            payload: {
                message: message,
                sub_type: subType
            }
        };
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = true;
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy.mockReturnValueOnce(iFrame.contentWindow);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledWith(action, '*');
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });

    test('calling sendDisplayErrorMessageAction null Frame Window', () => {
        const tempReturnObject = {...baseReturnObject};
        tempReturnObject.success = false;
        tempReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        getPigiFrameWindowSpy.mockReturnValueOnce(null);

        const res = sendDisplayErrorMessageAction(message, subType);

        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});

