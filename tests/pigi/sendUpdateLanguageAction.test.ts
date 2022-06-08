import {
    apiErrors,
    baseReturnObject,
    pigiActionTypes,
    FetchError,
    IPigiResponseType,
    sendUpdateLanguageAction,
    sendUpdateLanguageActionAsync
} from 'src';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('Testing UPDATE_LANGUAGE action sent to PIGI iFrame', () => {
    const calledOnce = 1;
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('iframe content is null', () => {
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction').mockReturnValue(falseReturnObject);

        const res = sendUpdateLanguageAction('en');
        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('iframe content is populated', () => {
        const correctReturnObject = {...baseReturnObject};
        correctReturnObject.success = true;
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction').mockReturnValue(correctReturnObject);

        const res = sendUpdateLanguageAction('en');
        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).toStrictEqual(correctReturnObject);
    });


    test('calling sendUpdateLanguageActionAsync success', async () => {
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_UPDATE_LANGUAGE,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendUpdateLanguageActionAsync('en');

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});
