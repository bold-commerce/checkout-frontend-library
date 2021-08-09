import {getPigiFrameWindow} from 'src';
import {pigi} from 'src/variables';

describe('testing get pigi frame window', () => {
    pigi.iFrameId = 'PIGI';
    const selector = 'iframe#PIGI';
    const html_string = '<html><body>test</body></html>';
    const src = 'data:text/html;charset=utf-8,' + escape(html_string);
    const calledOnce = 1;

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('calling getPigiFrameWindow success', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        iFrame.src = src;
        document.body.appendChild(iFrame);
        const querySelectorSpy = jest.spyOn(document, 'querySelector');

        const res = getPigiFrameWindow();

        expect(querySelectorSpy).toHaveBeenCalledTimes(calledOnce);
        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).not.toBeNull();
        expect(res).toBe(iFrame.contentWindow);
    });

    test('calling getPigiFrameWindow No contentWindow', () => {
        const iFrame = document.createElement('iframe');
        iFrame.setAttribute('id', pigi.iFrameId);
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValueOnce(iFrame);

        const res = getPigiFrameWindow();

        expect(querySelectorSpy).toHaveBeenCalledTimes(calledOnce);
        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
        expect(res).toBe(iFrame.contentWindow);
    });

    test('calling getPigiFrameWindow No iFrame', () => {
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValueOnce(null);

        const res = getPigiFrameWindow();

        expect(querySelectorSpy).toHaveBeenCalledTimes(calledOnce);
        expect(querySelectorSpy).toHaveBeenCalledWith(selector);
        expect(res).toBeNull();
    });
});

