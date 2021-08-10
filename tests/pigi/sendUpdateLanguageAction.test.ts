import {apiErrors, baseReturnObject} from 'src/variables';
import * as sendAction from 'src/pigi/sendAction';
import {FetchError, sendUpdateLanguageAction} from 'src';

describe('Testing UPDATE_LANGUAGE action sent to PIGI iFrame', () => {
    const calledOnce = 1;
    let sendActionSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('iframe content is null', () => {
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendActionSpy = jest.spyOn(sendAction, 'sendAction').mockReturnValue(falseReturnObject);

        const res = sendUpdateLanguageAction('en');
        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('iframe content is populated', () => {
        const correctReturnObject = {...baseReturnObject};
        correctReturnObject.success = true;
        sendActionSpy = jest.spyOn(sendAction, 'sendAction').mockReturnValue(correctReturnObject);

        const res = sendUpdateLanguageAction('en');
        expect(sendActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).toStrictEqual(correctReturnObject);
    });
});
