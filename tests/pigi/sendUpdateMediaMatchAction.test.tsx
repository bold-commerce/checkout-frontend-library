import {
    apiErrors,
    pigiActionTypes,
    FetchError,
    IPigiActionType,
    IPigiResponseType,
    sendUpdateMediaMatchAction,
    sendUpdateMediaMatchActionAsync
} from 'src';
import {baseReturnObject} from 'src/variables';
import * as sendPigiAction from 'src/pigi/sendPigiAction';

describe('Testing Pigi Update Media Match action', () => {
    const calledOnce = 1;
    let sendPigiActionSpy: jest.SpyInstance;
    let sendPigiActionAsyncSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.restoreAllMocks();
        sendPigiActionSpy = jest.spyOn(sendPigiAction, 'sendPigiAction');
        sendPigiActionAsyncSpy = jest.spyOn(sendPigiAction, 'sendPigiActionAsync');
    });

    test('sendUpdateMediaMatchAction Error return', () => {
        const conditionText = 'screen and (min-width: 768px)';
        const matches = false;
        const payload = {conditionText, matches};
        const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH, payload};
        const falseReturnObject = {...baseReturnObject};
        falseReturnObject.error = new FetchError(apiErrors.noPigiIframe.status, apiErrors.noPigiIframe.message);
        sendPigiActionSpy.mockReturnValueOnce(falseReturnObject);

        const res = sendUpdateMediaMatchAction(conditionText, matches);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(falseReturnObject);
    });

    test('sendUpdateMediaMatchAction Success return', () => {
        const conditionText = 'screen and (min-width: 768px)';
        const matches = false;
        const payload = {conditionText, matches};
        const action: IPigiActionType = {actionType: pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH, payload};
        const trueReturnObject = {...baseReturnObject};
        trueReturnObject.success = true;
        sendPigiActionSpy.mockReturnValueOnce(trueReturnObject);

        const res = sendUpdateMediaMatchAction(conditionText, matches);

        expect(sendPigiActionSpy).toHaveBeenCalledTimes(calledOnce);
        expect(sendPigiActionSpy).toHaveBeenCalledWith(action);
        expect(res).toStrictEqual(trueReturnObject);
    });

    test('calling sendUpdateMediaMatchActionAsync success', async () => {
        const conditionText = 'screen and (min-width: 768px)';
        const matches = false;
        const tempReturnObject: IPigiResponseType = {
            responseType: pigiActionTypes.PIGI_ADD_PAYMENT,
            payload: {success: true}
        };
        sendPigiActionAsyncSpy.mockReturnValueOnce(tempReturnObject);

        const res = await sendUpdateMediaMatchActionAsync(conditionText, matches);

        expect(sendPigiActionAsyncSpy).toHaveBeenCalledTimes(calledOnce);
        expect(res).not.toBeNull();
        expect(res).toStrictEqual(tempReturnObject);
    });
});
