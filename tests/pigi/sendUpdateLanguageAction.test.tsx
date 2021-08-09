import {apiErrors, baseReturnObject, pigi} from 'src/variables';
import * as getPigiFrameWindow from 'src/pigi/getPigiFrameWindow';
import {FetchError, sendUpdateLanguageAction} from 'src';

describe('Testing UPDATE_LANGUAGE action sent to PIGI iFrame', () => {
    const calledOnce = 1;
    const calledNone = 0;
    let postMessageSpy: jest.SpyInstance;
    let getPigiFrameWindowSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();

        // iFrame definition
        const html_string = '<html><body>test</body></html>';
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = 'data:text/html;charset=utf-8,' + escape(html_string);
        document.body.appendChild(iFrame);

        // set Spies
        postMessageSpy = jest.spyOn(iFrame.contentWindow as Window, 'postMessage');
        getPigiFrameWindowSpy = jest.spyOn(getPigiFrameWindow, 'getPigiFrameWindow').mockReturnValue(iFrame.contentWindow);
    });

    test('iframe content is null', () => {
        jest.spyOn(getPigiFrameWindow, 'getPigiFrameWindow').mockReturnValueOnce(null);
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);

        const res = sendUpdateLanguageAction('en');
        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledNone);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('iframe content is populated', () => {
        const correctReturnObject = {...baseReturnObject};
        correctReturnObject.success = true;

        const res = sendUpdateLanguageAction('en');
        expect(getPigiFrameWindowSpy).toHaveBeenCalledTimes(calledOnce);
        expect(postMessageSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).toStrictEqual(correctReturnObject);
    });
});
